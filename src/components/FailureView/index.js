import {useContext} from 'react'

import {ThemeContext} from '../../context/ThemeContext'

import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewRetryButton,
} from './styledComponents'

function FailureView(params) {
  const {retryFetching} = params
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state

  const onClickFailureRetryBtn = () => {
    retryFetching()
  }
  return (
    <FailureViewContainer>
      <FailureViewImage
        src={
          darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureViewHeading darkMode={darkMode}>
        Oops! Something Went Wrong
      </FailureViewHeading>
      <FailureViewDescription darkMode={darkMode}>
        We are having some trouble processing your request. Please try again.
      </FailureViewDescription>
      <FailureViewRetryButton type="button" onClick={onClickFailureRetryBtn}>
        Retry
      </FailureViewRetryButton>
    </FailureViewContainer>
  )
}
export default FailureView
