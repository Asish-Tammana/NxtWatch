import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import MenuPopUp from '../MenuPopUp'

import {
  HeaderBgContainer,
  LogoImage,
  NavItemsContainer,
  ProfileImage,
  ThemeButton,
  MenuButton,
} from './HeaderStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'
import ExitPopUp from '../ExitPopUp'
import './index.css'

class Header extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, changeTheme} = value

          const logoUrl = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <HeaderBgContainer darkTheme={darkTheme} data-testid="banner">
              <Link to="/">
                <LogoImage src={logoUrl} alt="website logo" />
              </Link>
              <NavItemsContainer type="none">
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={changeTheme}
                  darkTheme={darkTheme}
                >
                  {darkTheme ? (
                    <FiSun className="theme-icon" />
                  ) : (
                    <FaMoon className="theme-icon" />
                  )}
                </ThemeButton>

                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <MenuButton>
                  <MenuPopUp />
                </MenuButton>

                <ExitPopUp />
              </NavItemsContainer>
            </HeaderBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Header
