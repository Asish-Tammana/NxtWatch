import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  VideItemContainer,
  Thumbnail,
  VideoItemBottomContainer,
  ChannelLogo,
  VideoItemTextContainer,
  Title,
  ChannelName,
  ViewsDateContainer,
  VDText,
} from './VideoItemStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'

class VideoItem extends Component {
  render() {
    const {videoDetails} = this.props
    const {
      id,
      title,
      thumbnailUrl,
      viewCount,
      publishedAt,
      channel,
    } = videoDetails
    const {name, profileImageUrl} = channel
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <VideItemContainer>
              <Link to={`/videos/${id}`} className="link-style">
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <VideoItemBottomContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoItemTextContainer>
                    <Title darkTheme={darkTheme}>{title}</Title>
                    <ChannelName darkTheme={darkTheme}>{name}</ChannelName>
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
                  </VideoItemTextContainer>
                </VideoItemBottomContainer>
              </Link>
            </VideItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItem
