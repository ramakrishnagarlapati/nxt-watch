import {useContext} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'
import {ThemeContext} from '../../context/ThemeContext'

import {
  NotFoundPageContainer,
  NotFoundContentAndSidebarWrapper,
  NotFoundPage,
  NotFoundPageImage,
  NotFoundPageHeading,
  NotFoundPageDescription,
} from './styledComponents'

function NotFound() {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  return (
    <NotFoundPageContainer darkMode={darkMode}>
      <Header />
      <NotFoundContentAndSidebarWrapper>
        <Sidebar />
        <NotFoundPage>
          <NotFoundPageImage
            src={
              darkMode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <NotFoundPageHeading darkMode={darkMode}>
            Page Not Found
          </NotFoundPageHeading>
          <NotFoundPageDescription darkMode={darkMode}>
            we are sorry, the page you requested could not be found.
          </NotFoundPageDescription>
        </NotFoundPage>
      </NotFoundContentAndSidebarWrapper>
    </NotFoundPageContainer>
  )
}
export default NotFound
