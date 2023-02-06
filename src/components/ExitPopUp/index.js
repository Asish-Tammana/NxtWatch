import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {HiOutlineLogout} from 'react-icons/hi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {
  LogoutButton,
  LogoutPopUp,
  CloseButton,
  ConfirmLogout,
  LogoutMobileButton,
  MediumPopUp,
  MobilePopUp,
} from './ExitPopUpStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'

class ExitPopUp extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          const logoutClicked = () => {
            Cookies.remove('jwt_token')

            const {history} = this.props

            history.replace('/login')
          }

          return (
            <>
              <MediumPopUp>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" darkTheme={darkTheme}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <>
                      <LogoutPopUp darkTheme={darkTheme}>
                        <p>Are you sure, you want to logout?</p>
                        <CloseButton
                          darkTheme={darkTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>
                        <ConfirmLogout onClick={logoutClicked}>
                          Confirm
                        </ConfirmLogout>
                      </LogoutPopUp>
                    </>
                  )}
                </Popup>
              </MediumPopUp>
              <MobilePopUp>
                <Popup
                  modal
                  trigger={
                    <LogoutMobileButton type="button" darkTheme={darkTheme}>
                      <HiOutlineLogout className="theme-icon" />
                    </LogoutMobileButton>
                  }
                >
                  {close => (
                    <>
                      <LogoutPopUp darkTheme={darkTheme}>
                        <p>Are you sure, you want to logout?</p>
                        <CloseButton
                          darkTheme={darkTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>
                        <ConfirmLogout onClick={logoutClicked}>
                          Confirm
                        </ConfirmLogout>
                      </LogoutPopUp>
                    </>
                  )}
                </Popup>
              </MobilePopUp>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default withRouter(ExitPopUp)
