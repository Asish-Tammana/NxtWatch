import {Component} from 'react'
import Header from '../Header'
import MenuBar from '../MenuBar'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDescription,
} from './NotFoundStyles'

class NotFound extends Component {
  componentDidMount() {
    this.updateTheMenuBar()
  }

  updateTheMenuBar = () => {
    const {updateActiveTab} = this.props
    updateActiveTab('NO_SELECTION')
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
                <NotFoundContainer darkTheme={darkTheme}>
                  <NotFoundImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                  <NotFoundTitle darkTheme={darkTheme}>
                    Page Not Found
                  </NotFoundTitle>
                  <NotFoundDescription darkTheme={darkTheme}>
                    we are sorry, the page you requested could not be found.
                  </NotFoundDescription>
                </NotFoundContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default NotFound
