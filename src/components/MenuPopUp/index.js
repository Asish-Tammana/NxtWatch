import {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Popup from 'reactjs-popup'
import {
  PopUpMenu,
  Button,
  BottomContainer,
  ItemContainer,
  ItemText,
  MainContainer,
} from './MenuPopUpStyles'
import NxtWatchContext from '../../Context/NxtWatchContext'

class MenuPopUp extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, tabsList, activeTab, updateActiveTab} = value

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
            <Popup
              modal
              trigger={
                <Button darkTheme={darkTheme}>
                  <GiHamburgerMenu />
                </Button>
              }
            >
              {close => (
                <PopUpMenu darkTheme={darkTheme}>
                  <div className="popup-top-con">
                    <AiOutlineClose onClick={() => close()} />
                  </div>

                  <BottomContainer>
                    <MainContainer>
                      {tabsList.map(each => {
                        let active

                        if (activeTab === each.id && darkTheme === false) {
                          active = 'active-tab-light'
                        } else if (
                          activeTab === each.id &&
                          darkTheme === true
                        ) {
                          active = 'active-tab-dark'
                        }

                        const activeIcon =
                          activeTab === each.id && 'active-icon'

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
                    </MainContainer>
                  </BottomContainer>
                </PopUpMenu>
              )}
            </Popup>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default MenuPopUp
