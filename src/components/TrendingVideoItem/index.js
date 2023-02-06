import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemContainer,
  ThumbnailImage,
  VideoItemTextContainer,
  VideoItemHeading,
  ChannelName,
  ViewsDateContainer,
  VDText,
} from './TrendingVideoItemStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'

class TrendingVideoItem extends Component {
  render() {
    const {videoDetails} = this.props
    const {
      id,
      thumbnailUrl,
      title,
      channel,
      viewCount,
      publishedAt,
    } = videoDetails
    const {name} = channel
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <Link to={`/videos/${id}`} className="link-style">
              <VideoItemContainer>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoItemTextContainer>
                  <VideoItemHeading darkTheme={darkTheme}>
                    {title}
                  </VideoItemHeading>
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
              </VideoItemContainer>
            </Link>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default TrendingVideoItem
