import styled from 'styled-components'

import {
  TrendingPageContainer,
  TrendingContentAndSidebarWrapper,
  TrendingPage,
} from '../Trending/styledComponents'

export const NotFoundPageContainer = styled(TrendingPageContainer)``

export const NotFoundContentAndSidebarWrapper = styled(
  TrendingContentAndSidebarWrapper,
)``

export const NotFoundPage = styled(TrendingPage)`
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const NotFoundPageImage = styled.img`
  width: 350px;
  height: 300px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`

export const NotFoundPageHeading = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.darkMode ? '#f9f9f9' : ' #1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const NotFoundPageDescription = styled.p`
  text-align: center;
  font-size: 14px;
  max-width: 300px;
  line-height: 1.5;
  color: ${props => (props.darkMode ? '#e2e8f0' : ' #616e7c')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`
