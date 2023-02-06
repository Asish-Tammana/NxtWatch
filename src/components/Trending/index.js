import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import MenuBar from '../MenuBar'
import ResponseLoader from '../Loader'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  TrendingBgContainer,
  FailureBgContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  TotalTrendingContainer,
  HeadingContainer,
  IconContainer,
  Heading,
  VideoItemContainer,
} from './TrendingStyles'

const apiResultsList = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiResultsList.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
    this.updateTheMenuBar()
  }

  updateTheMenuBar = () => {
    const {updateActiveTab} = this.props
    updateActiveTab('TRENDING')
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiResultsList.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(trendingUrl, options)
    const data = await response.json()

    if (response.ok) {
      const {videos} = data
      const responseTrendingVideosList = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        trendingVideosList: responseTrendingVideosList,
        apiStatus: apiResultsList.success,
      })
    } else {
      this.setState({
        apiStatus: apiResultsList.failure,
      })
    }
  }

  renderSuccessView = darkTheme => {
    const {trendingVideosList} = this.state
    return (
      <TotalTrendingContainer data-testid="trending">
        <HeadingContainer darkTheme={darkTheme}>
          <IconContainer darkTheme={darkTheme}>
            <HiFire className="in-detail-page-icon" />
          </IconContainer>
          <Heading darkTheme={darkTheme}>Trending</Heading>
        </HeadingContainer>
        <VideoItemContainer darkTheme={darkTheme}>
          {trendingVideosList.map(eachVideo => (
            <TrendingVideoItem videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </VideoItemContainer>
      </TotalTrendingContainer>
    )
  }

  renderFailureView = darkTheme => {
    const oopsImg = darkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureBgContainer darkTheme={darkTheme}>
        <FailureImage src={oopsImg} alt="failure view" />
        <FailureHeading darkTheme={darkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailurePara darkTheme={darkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
      </FailureBgContainer>
    )
  }

  renderResults = darkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiResultsList.success:
        return this.renderSuccessView(darkTheme)
      case apiResultsList.failure:
        return this.renderFailureView(darkTheme)
      case apiResultsList.inProgress:
        return <ResponseLoader />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <Header />
              <div className="menu-active-horizontal">
                <MenuBar />
                <TrendingBgContainer>
                  {this.renderResults(darkTheme)}
                </TrendingBgContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Trending
