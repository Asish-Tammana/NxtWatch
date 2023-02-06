import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import MenuBar from '../MenuBar'
import ResponseLoader from '../Loader'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  VideoDetailedContainer,
  FailureBgContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  VideoTitle,
  TitleBelowContainer,
  ViewsDateContainer,
  VDText,
  IconsContainer,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelTitle,
  Description,
} from './VideoItemDetailsStyles'

const apiResultsList = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiResultsList.initial,
    videoLiked: false,
    videoDisliked: false,
    videoSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
    // this.updateTheMenuBar()
  }

  updateTheMenuBar = () => {
    const {updateActiveTab} = this.props
    updateActiveTab('NO_SELECTION')
  }

  likeVideo = () => {
    this.setState({
      videoLiked: true,
      videoDisliked: false,
    })
  }

  dislikeVideo = () => {
    this.setState({
      videoDisliked: true,
      videoLiked: false,
    })
  }

  saveVideo = () => {
    this.setState(prevState => ({
      videoSaved: !prevState.videoSaved,
    }))
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiResultsList.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const videoDetailsUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videoDetailsUrl, options)
    const data = await response.json()

    if (response.ok) {
      const responseVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        videoDetails: responseVideoDetails,
        apiStatus: apiResultsList.success,
      })
    } else {
      this.setState({
        apiStatus: apiResultsList.failure,
      })
    }
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
        <RetryButton onClick={this.getVideoDetails}>Retry</RetryButton>
      </FailureBgContainer>
    )
  }

  renderSuccessView = darkTheme => {
    const {videoDetails, videoLiked, videoDisliked, videoSaved} = this.state
    const {
      videoUrl,
      title,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <div>
        <ReactPlayer url={videoUrl} controls width="100%" />
        <div>
          <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
          <TitleBelowContainer darkTheme={darkTheme}>
            <ViewsDateContainer darkTheme={darkTheme}>
              <VDText>{viewCount} views</VDText>
              <BsDot />
              <VDText>
                {formatDistanceToNow(new Date(publishedAt))
                  .split(' ')
                  .splice(1)
                  .join(' ')}{' '}
                ago
              </VDText>
            </ViewsDateContainer>
            <IconsContainer>
              <LikeIcon
                onClick={this.likeVideo}
                videoLiked={videoLiked}
                darkTheme={darkTheme}
              >
                <AiOutlineLike className="like-icon" />
                <p>Like</p>
              </LikeIcon>
              <DislikeIcon
                videoDisliked={videoDisliked}
                darkTheme={darkTheme}
                onClick={this.dislikeVideo}
              >
                <AiOutlineDislike className="like-icon" />
                <p>Dislike</p>
              </DislikeIcon>
              <NxtWatchContext.Consumer>
                {value => {
                  const {updateSavedVideosList, removeFromSavedList} = value
                  return (
                    <SaveIcon
                      videoSaved={videoSaved}
                      darkTheme={darkTheme}
                      onClick={() => {
                        this.saveVideo()

                        // eslint-disable-next-line no-unused-vars
                        const a = !videoSaved
                          ? updateSavedVideosList(videoDetails)
                          : removeFromSavedList(videoDetails.id)
                      }}
                    >
                      <MdPlaylistAdd className="like-icon" />
                      {videoSaved ? 'Saved' : 'Save'}
                    </SaveIcon>
                  )
                }}
              </NxtWatchContext.Consumer>
            </IconsContainer>
          </TitleBelowContainer>
          <HorizontalLine darkTheme={darkTheme} />
          <ChannelContainer>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
            <div>
              <ChannelTitle darkTheme={darkTheme}>{name}</ChannelTitle>
              <VDText>{subscriberCount} subscribers</VDText>
              <Description darkTheme={darkTheme}>{description}</Description>
            </div>
          </ChannelContainer>
        </div>
      </div>
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
                <VideoDetailedContainer
                  darkTheme={darkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderResults(darkTheme)}
                </VideoDetailedContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItemDetails
