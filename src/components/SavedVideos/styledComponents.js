import styled from 'styled-components'

import {
  TrendingPageContainer,
  TrendingContentAndSidebarWrapper,
  TrendingPage,
  TrendingVideosListAndHeaderWrapper,
  TrendingHeader,
  TrendingHeading,
  TrendingVideosList,
  TrendingIconBackgroundContainer,
} from '../Trending/styledComponents'

export const SavedVideosPageContainer = styled(TrendingPageContainer)``

export const SavedVideosContentAndSidebarWrapper = styled(
  TrendingContentAndSidebarWrapper,
)``

export const SavedVideosPage = styled(TrendingPage)``

export const NoSavedVideosViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`

export const NoSavedVideosImage = styled.img`
  width: 250px;
  height: 200px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`

export const NoSavedVideosHeading = styled.h3`
  font-size: 24px;
  color: ${props => (props.darkMode ? '#f9f9f9' : ' #1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const NoSavedVideosDescription = styled.p`
  line-height: 1.5;
  font-weight: 500;
  color: ${props => (props.darkMode ? '#e2e8f0' : ' #616e7c')};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const SavedVideosListAndHeaderWrapper = styled(
  TrendingVideosListAndHeaderWrapper,
)``

export const SavedVideosHeader = styled(TrendingHeader)``

export const SavedVideosIconBackgroundContainer = styled(
  TrendingIconBackgroundContainer,
)``

export const SavedVideosHeading = styled(TrendingHeading)``

export const SavedVideosList = styled(TrendingVideosList)``
