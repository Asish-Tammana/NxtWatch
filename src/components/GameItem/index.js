import {Component} from 'react'
import {
  GameItemContainer,
  GameThumbnail,
  GameTitle,
  Views,
} from './GameItemStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'

class GameItem extends Component {
  render() {
    const {gameDetails} = this.props
    const {title, thumbnailUrl, viewCount} = gameDetails
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <GameItemContainer>
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle darkTheme={darkTheme}>{title}</GameTitle>
              <Views darkTheme={darkTheme}>
                {viewCount} Watching Worldwide
              </Views>
            </GameItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default GameItem
