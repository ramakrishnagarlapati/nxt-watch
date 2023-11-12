import styled from 'styled-components'

export const LogoutPopupContainer = styled.div`
  width: 80%;
  max-width: 350px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#e0e0e0')};
  padding: 40px 30px;
  border-radius: 12px;
`

export const LogoutPopupDescription = styled.p`
  color: ${props => (props.darkMode ? '#ebebeb' : '#00306e')};
  margin-bottom: 30px;
  text-align: center;
`

export const ButtonsContainers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const sharedButtonStyles = `
padding:14px 20px;
border:none;
border-radius:4px;
font-size:16px;
font-family:inherit;
font-weight:500;
outline:none;
cursor:pointer;
transition:opacity 0.3s;

&:hover{
    opacity:0.8;
}
`

export const LogoutPopupConfirmButton = styled.button`
  ${sharedButtonStyles}
  background-color: #3b82f6;
  color: #f1f5f9;
`

export const LogoutPopupCancelButton = styled.button`
  ${sharedButtonStyles}
  background-color:transparent;
  color: #64748b;
  border: 1px solid #64748b;
`
