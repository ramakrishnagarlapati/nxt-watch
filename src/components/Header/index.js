import {useContext} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import {HiOutlineSun} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import TabsList from '../TabsList'
import LogoutPopup from '../LogoutPopup'
import {ThemeContext} from '../../context/ThemeContext'

import './index.css'
import {
  NavHeader,
  NavContent,
  NavLogoImage,
  MobileNavList,
  MobileNavItem,
  ThemeButton,
  MenuButton,
  MobileLogoutButton,
  DesktopNavList,
  DesktopNavItem,
  NavProfileImage,
  DesktopLogoutButton,
  PopupContainer,
  CloseButton,
} from './styledComponents'

function Header(props) {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const onClickThemeBtn = () => {
    const {dispatch} = theme
    if (darkMode) {
      dispatch({type: 'LIGHTMODE'})
    } else {
      dispatch({type: 'DARKMODE'})
    }
  }
  const onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NavHeader darkMode={darkMode}>
      <NavContent>
        <Link to="/" className="home-link">
          <NavLogoImage
            src={
              darkMode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
        </Link>
        <MobileNavList>
          <MobileNavItem>
            <ThemeButton
              type="button"
              onClick={onClickThemeBtn}
              data-testid="theme"
            >
              {darkMode ? (
                <HiOutlineSun size={34} color="#fff" />
              ) : (
                <FaMoon size={24} />
              )}
            </ThemeButton>
          </MobileNavItem>
          <MobileNavItem>
            <Popup
              className={`popup-content ${darkMode ? 'dark' : 'light'}`}
              modal
              trigger={
                <MenuButton type="button">
                  <GiHamburgerMenu
                    size={24}
                    color={darkMode ? '#fff' : '#0f0f0f'}
                  />
                </MenuButton>
              }
            >
              {close => (
                <PopupContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <AiOutlineClose
                      size={24}
                      color={darkMode ? '#fff' : '#0f0f0f'}
                    />
                  </CloseButton>

                  <TabsList justifyContentValue="center" />
                </PopupContainer>
              )}
            </Popup>
          </MobileNavItem>
          <MobileNavItem>
            <Popup
              modal
              className="popup-content logout-popup"
              trigger={
                <MobileLogoutButton type="button">
                  <FiLogOut size={24} color={darkMode ? '#fff' : '#0f0f0f'} />
                </MobileLogoutButton>
              }
            >
              {close => (
                <LogoutPopup
                  close={close}
                  onClickLogoutBtn={onClickLogoutBtn}
                />
              )}
            </Popup>
          </MobileNavItem>
        </MobileNavList>
        <DesktopNavList>
          <DesktopNavItem>
            <ThemeButton
              type="button"
              onClick={onClickThemeBtn}
              data-testid="theme"
            >
              {darkMode ? (
                <HiOutlineSun size={30} color="#fff" />
              ) : (
                <FaMoon size={30} />
              )}
            </ThemeButton>
          </DesktopNavItem>
          <DesktopNavItem>
            <NavProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </DesktopNavItem>
          <DesktopNavItem>
            <Popup
              modal
              className="popup-content logout-popup"
              trigger={
                <DesktopLogoutButton type="button" darkMode={darkMode}>
                  Logout
                </DesktopLogoutButton>
              }
            >
              {close => (
                <LogoutPopup
                  close={close}
                  onClickLogoutBtn={onClickLogoutBtn}
                />
              )}
            </Popup>
          </DesktopNavItem>
        </DesktopNavList>
      </NavContent>
    </NavHeader>
  )
}
export default withRouter(Header)
