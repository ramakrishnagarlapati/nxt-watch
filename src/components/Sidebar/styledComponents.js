import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#1f1e1e' : '#fff')};
  height: calc(100vh - 100px);
  width: 250px;
  position: fixed;
  top: 100px;
  left: 0;
  overflow-x: hidden;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const SidebarFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`

export const ContactUsText = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  color: ${props => (props.darkMode ? '#bfbfbf' : '#475569')};
  font-weight: 600;
`

export const ContactLogosContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const ContactLogo = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`

export const FooterDescription = styled.p`
  margin-bottom: 30px;
  color: ${props => (props.darkMode ? '#bfbfbf' : '#475569')};
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
`
