import styled from 'styled-components'

export const NavHeader = styled.nav`
  background-color: ${props => (props.darkMode ? '#1f1e1e' : '#fff')};
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;

  @media screen and (min-width: 768px) {
  }
`

export const NavContent = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogoImage = styled.img`
  width: 150px;
`

export const MobileNavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 16px;

  @media screen and (min-width: 576px) {
    gap: 26px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileNavItem = styled.li``

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MenuButton = styled(ThemeButton)``

export const MobileLogoutButton = styled(ThemeButton)``

export const DesktopNavList = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 30px;
  }
`

export const DesktopNavItem = styled.li``

export const NavProfileImage = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`

export const DesktopLogoutButton = styled.button`
  border: 1px solid ${props => (props.darkMode ? '#f9f9f9' : '#3b82f6')};
  color: ${props => (props.darkMode ? '#f9f9f9' : '#3b82f6')};
  font-weight: 600;
  font-family: inherit;
  font-size: 16px;
  padding: 8px 26px;
  background-color: inherit;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CloseButton = styled(ThemeButton)`
  align-self: flex-end;
  margin-top: 40px;
  margin-right: 40px;
`

export const MobileTabsList = styled.ul`
  flex-grow: 1;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

export const MobileTabItem = styled.li`
  background-color: ${props => {
    const {isActive, darkMode} = props
    if (darkMode) {
      return isActive ? '#181818' : 'inherit'
    }
    return isActive ? '#f1f5f9' : 'inherit'
  }};
`

export const TabText = styled.p`
  color: ${props => {
    const {isActive, darkMode} = props
    if (darkMode) {
      return isActive ? '#f1f1f1' : '#64748b'
    }
    return isActive ? '#181818' : '#475569'
  }};
  font-weight: ${props => (props.isActive ? 600 : 500)};
`
