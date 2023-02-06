import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import MenuBar from '../MenuBar'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  TrendingBgContainer,
  FailureBgContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  TotalTrendingContainer,
  HeadingContainer,
  IconContainer,
  Heading,
  VideoItemContainer,
} from '../Trending/TrendingStyles'

class SavedVideos extends Component {
  componentDidMount() {
    this.updateTheMenuBar()
  }

  updateTheMenuBar = () => {
    const {updateActiveTab} = this.props
    updateActiveTab('SAVED_VIDEOS')
  }

  renderSuccessView = (darkTheme, savedVideosList) => {
    if (savedVideosList.length === 0) {
      return this.renderNoSavedVideos(darkTheme)
    }
    return (
      <TotalTrendingContainer darkTheme={darkTheme} data-testid="savedVideos">
        <HeadingContainer darkTheme={darkTheme}>
          <IconContainer darkTheme={darkTheme}>
            <MdPlaylistAdd className="in-detail-page-icon" />
          </IconContainer>
          <Heading darkTheme={darkTheme}>Saved Videos</Heading>
        </HeadingContainer>
        <VideoItemContainer darkTheme={darkTheme}>
          {savedVideosList.map(eachVideo => (
            <TrendingVideoItem videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </VideoItemContainer>
      </TotalTrendingContainer>
    )
  }

  renderNoSavedVideos = darkTheme => {
    const oopsImg =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
    return (
      <FailureBgContainer darkTheme={darkTheme}>
        <FailureImage src={oopsImg} alt="no saved videos" />
        <FailureHeading darkTheme={darkTheme}>
          No saved videos found
        </FailureHeading>
        <FailurePara darkTheme={darkTheme}>
          You can save your videos while watching them
        </FailurePara>
      </FailureBgContainer>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, savedVideosList} = value

          return (
            <>
              <Header />
              <div className="menu-active-horizontal">
                <MenuBar />
                <TrendingBgContainer>
                  {this.renderSuccessView(darkTheme, savedVideosList)}
                </TrendingBgContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default SavedVideos
