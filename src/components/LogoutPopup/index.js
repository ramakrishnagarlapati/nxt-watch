import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'

import {
  LogoutPopupContainer,
  LogoutPopupDescription,
  ButtonsContainers,
  LogoutPopupConfirmButton,
  LogoutPopupCancelButton,
} from './styledComponents'

function LogoutPopup(params) {
  const {close, onClickLogoutBtn} = params
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  return (
    <LogoutPopupContainer darkMode={darkMode}>
      <LogoutPopupDescription darkMode={darkMode}>
        Are you sure you want to logout?
      </LogoutPopupDescription>
      <ButtonsContainers>
        <LogoutPopupCancelButton
          type="button"
          onClick={() => close()}
          darkMode={darkMode}
        >
          Cancel
        </LogoutPopupCancelButton>
        <LogoutPopupConfirmButton type="button" onClick={onClickLogoutBtn}>
          Confirm
        </LogoutPopupConfirmButton>
      </ButtonsContainers>
    </LogoutPopupContainer>
  )
}
export default LogoutPopup
