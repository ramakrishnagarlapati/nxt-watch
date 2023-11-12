import styled from 'styled-components'
import {
  FailureViewRetryButton,
  FailureViewContainer,
  FailureViewHeading,
  FailureViewImage,
  FailureViewDescription,
} from '../FailureView/styledComponents'

export const HomePageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const HomeContentAndSidebarWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

export const BannerAndHomeContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const HomeContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (min-width: 576px) {
    padding: 30px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${props => (props.darkMode ? '#444444' : '#cbd5e1')};
  border-radius: 2px;

  @media screen and (min-width: 576px) {
    width: 80%;
    max-width: 550px;
  }
`

export const HomeSearchInput = styled.input`
  flex-grow: 1;
  border: none;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  padding: 8px 16px;
  font-size: 14px;
  outline: none;
`

export const HomeSearchButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${props => (props.darkMode ? '#444444' : '#e6e6e6')};
  border: none;
  border-left: 1px solid ${props => (props.darkMode ? '#444444' : '#e6e6e6')};
  cursor: pointer;
  outline: none;
`
export const HomePageVideosListContainer = styled.div`
  flex-grow: 1;
  margin: 20px 0;

  @media screen and (min-width: 576px) {
    margin: 30px 0;
  }
`
export const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    gap: 30px;
  }
`
export const NoVideosViewContainer = styled(FailureViewContainer)``

export const NoVideosImage = styled(FailureViewImage)``

export const NoVideosHeading = styled(FailureViewHeading)``

export const NoVideosDescription = styled(FailureViewDescription)``

export const NoVideosRetryButton = styled(FailureViewRetryButton)``
