import {Component} from 'react'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {LoaderBgContainer} from './LoaderStyles'

class ResponseLoader extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, displayPremiumContainer} = value
          const loaderColor = darkTheme ? '#ffffff' : '#4f46e5'
          return (
            <LoaderBgContainer
              darkTheme={darkTheme}
              displayPremiumContainer={displayPremiumContainer}
            >
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color={loaderColor}
                  height="50"
                  width="50"
                />
              </div>
            </LoaderBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default ResponseLoader
