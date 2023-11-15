import {useContext} from 'react'

import TabsList from '../TabsList'
import {ThemeContext} from '../../context/ThemeContext'

import {
  SideBarContainer,
  SidebarFooter,
  ContactUsText,
  ContactLogosContainer,
  ContactLogo,
  FooterDescription,
} from './styledComponents'

function Sidebar() {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  return (
    <SideBarContainer darkMode={darkMode}>
      <TabsList justifyContentValue="flex-start" />
      <SidebarFooter>
        <ContactUsText darkMode={darkMode}>Contact Us</ContactUsText>
        <ContactLogosContainer>
          <ContactLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
            alt="facebook logo"
          />
          <ContactLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
            alt="twitter logo"
          />
          <ContactLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
            alt="linked in logo"
          />
        </ContactLogosContainer>
        <FooterDescription darkMode={darkMode}>
          Enjoy! Now to see your channels and recommendations!
        </FooterDescription>
      </SidebarFooter>
    </SideBarContainer>
  )
}
export default Sidebar
