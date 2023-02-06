import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import MenuBar from '../MenuBar'
import ResponseLoader from '../Loader'
import GameItem from '../GameItem'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  GamingBgContainer,
  FailureBgContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  TotalGamingContainer,
  HeadingContainer,
  IconContainer,
  Heading,
  GamingItemContainer,
} from './GamingStyles'

const apiResultsList = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiResultsList.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
    this.updateTheMenuBar()
  }

  updateTheMenuBar = () => {
    const {updateActiveTab} = this.props
    updateActiveTab('GAMING')
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiResultsList.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const trendingUrl = 'https://apis.ccbp.in/videos/gaming'
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
      const responseGamingVideosList = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        gamingVideosList: responseGamingVideosList,
        apiStatus: apiResultsList.success,
      })
    } else {
      this.setState({
        apiStatus: apiResultsList.failure,
      })
    }
  }

  renderSuccessView = darkTheme => {
    const {gamingVideosList} = this.state
    return (
      <TotalGamingContainer>
        <HeadingContainer darkTheme={darkTheme}>
          <IconContainer darkTheme={darkTheme}>
            <SiYoutubegaming className="in-detail-page-icon" />
          </IconContainer>
          <Heading darkTheme={darkTheme}>Gaming</Heading>
        </HeadingContainer>
        <GamingItemContainer darkTheme={darkTheme} type="none">
          {gamingVideosList.map(eachItem => (
            <GameItem gameDetails={eachItem} key={eachItem.id} />
          ))}
        </GamingItemContainer>
      </TotalGamingContainer>
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
                <GamingBgContainer data-testid="gaming">
                  {this.renderResults(darkTheme)}
                </GamingBgContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
