import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingContentAndSidebarWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

export const TrendingPage = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    padding: 0;
  }
`

export const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrendingVideosListAndHeaderWrapper = styled.div``

export const TrendingHeader = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`

export const TrendingIconBackgroundContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#e2e8f0')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrendingHeading = styled.h2`
  font-size: 24px;
  color: ${props => (props.darkMode ? '#cbd5e1' : '#1e293b')};

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const TrendingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`
