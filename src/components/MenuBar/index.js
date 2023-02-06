import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  MenuContainer,
  ItemContainer,
  ContactLogo,
  ItemText,
} from './MenuBarStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'
import './index.css'

class MenuBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, activeTab, updateActiveTab, tabsList} = value

          const renderTabIcon = (iconId, activeIcon) => {
            switch (iconId) {
              case 'HOME':
                return <AiFillHome className={`${activeIcon} menubar-icon`} />
              case 'TRENDING':
                return <HiFire className={`${activeIcon} menubar-icon`} />
              case 'GAMING':
                return (
                  <SiYoutubegaming className={`${activeIcon} menubar-icon`} />
                )
              case 'SAVED_VIDEOS':
                return (
                  <MdPlaylistAdd className={`${activeIcon} menubar-icon`} />
                )
              default:
                return null
            }
          }
          return (
            <MenuContainer darkTheme={darkTheme}>
              <div>
                {tabsList.map(each => {
                  let active

                  if (activeTab === each.id && darkTheme === false) {
                    active = 'active-tab-light'
                  } else if (activeTab === each.id && darkTheme === true) {
                    active = 'active-tab-dark'
                  }

                  const activeIcon = activeTab === each.id && 'active-icon'

                  return (
                    <Link
                      to={each.linkAddress}
                      className="link-style"
                      key={each.id}
                    >
                      <ItemContainer
                        className={`${active}`}
                        onClick={() => updateActiveTab(each.id)}
                        darkTheme={darkTheme}
                      >
                        {renderTabIcon(each.id, activeIcon)}
                        <ItemText darkTheme={darkTheme}>
                          {each.displayText}
                        </ItemText>
                      </ItemContainer>
                    </Link>
                  )
                })}
              </div>
              <div className="menubar-bottom-container">
                <p className="contact-us">CONTACT US</p>
                <div className="contact-icon-containers">
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </div>
            </MenuContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default MenuBar
