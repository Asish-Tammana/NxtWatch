import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import ResponseLoader from '../Loader'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  PremiumContainer,
  LogoImage,
  CloseButton,
  GetItNowButton,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  FailureBgContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  VideoItemsContainer,
} from './HomeStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header'
import MenuBar from '../MenuBar'

const apiResultsList = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    homeVideosList: [],
    apiStatus: apiResultsList.initial,
    userSearchInput: '',
  }

  componentDidMount() {
    this.getVideos()
    this.updateTheMenuBar()
  }

  updateTheMenuBar = () => {
    const {updateActiveTab} = this.props
    updateActiveTab('HOME')
  }

  updateSearchInput = event => {
    this.setState({
      userSearchInput: event.target.value,
    })
  }

  startSearch = event => {
    event.preventDefault()
    this.getVideos()
  }

  getVideos = async () => {
    const {userSearchInput} = this.state

    this.setState({
      apiStatus: apiResultsList.inProgress,
    })

    const homeVideosUrl = `https://apis.ccbp.in/videos/all?search=${userSearchInput}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(homeVideosUrl, options)
    const data = await response.json()

    if (response.ok) {
      const {videos} = data

      const responseVideosList = videos.map(each => ({
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
        apiStatus: apiResultsList.success,
        homeVideosList: responseVideosList,
      })
    } else {
      this.setState({
        apiStatus: apiResultsList.failure,
      })
    }
  }

  renderSuccessView = (darkTheme, displayPremiumContainer) => {
    const {homeVideosList} = this.state
    return (
      <>
        {homeVideosList.length > 0 ? (
          <VideoItemsContainer type="none">
            {homeVideosList.map(eachVideo => (
              <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </VideoItemsContainer>
        ) : (
          <FailureBgContainer displayPremiumContainer={displayPremiumContainer}>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              displayPremiumContainer={displayPremiumContainer}
            />
            <FailureHeading darkTheme={darkTheme}>
              No Search results found
            </FailureHeading>
            <FailurePara darkTheme={darkTheme}>
              Try different key words or remove search filters
            </FailurePara>
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </FailureBgContainer>
        )}
      </>
    )
  }

  renderFailureView = (darkTheme, displayPremiumContainer) => {
    const oopsImg = darkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureBgContainer displayPremiumContainer={displayPremiumContainer}>
        <FailureImage
          src={oopsImg}
          alt="failure view"
          displayPremiumContainer={displayPremiumContainer}
        />
        <FailureHeading darkTheme={darkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailurePara darkTheme={darkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryButton onClick={this.getVideos}>Retry</RetryButton>
      </FailureBgContainer>
    )
  }

  renderResult = (darkTheme, displayPremiumContainer) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiResultsList.success:
        return this.renderSuccessView(darkTheme, displayPremiumContainer)
      case apiResultsList.failure:
        return this.renderFailureView(darkTheme, displayPremiumContainer)
      case apiResultsList.inProgress:
        return <ResponseLoader />
      default:
        return null
    }
  }

  render() {
    const {userSearchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            darkTheme,
            displayPremiumContainer,
            removePremiumContainer,
          } = value
          return (
            <>
              <Header />
              <div className="menu-active-horizontal">
                <MenuBar />
                <HomeContainer>
                  <PremiumContainer
                    displayPremiumContainer={displayPremiumContainer}
                    data-testid="banner"
                  >
                    <div>
                      <LogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                      <GetItNowButton> GET IT NOW</GetItNowButton>
                    </div>
                    <CloseButton data-testid="close">
                      <AiOutlineClose
                        className="theme-icon-close"
                        onClick={removePremiumContainer}
                      />
                    </CloseButton>
                  </PremiumContainer>

                  <VideosContainer darkTheme={darkTheme} data-testid="home">
                    <SearchContainer onSubmit={this.startSearch}>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        darkTheme={darkTheme}
                        value={userSearchInput}
                        onChange={this.updateSearchInput}
                      />
                      <SearchButton
                        darkTheme={darkTheme}
                        onClick={this.getVideos}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderResult(darkTheme, displayPremiumContainer)}
                  </VideosContainer>
                </HomeContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
