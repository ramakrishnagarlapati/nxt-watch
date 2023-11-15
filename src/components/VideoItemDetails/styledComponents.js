import styled from 'styled-components'

import {
  TrendingPageContainer,
  TrendingContentAndSidebarWrapper,
  TrendingPage,
} from '../Trending/styledComponents'

export const VideoItemDetailsPageContainer = styled(TrendingPageContainer)``

export const VideoContentAndSidebarWrapper = styled(
  TrendingContentAndSidebarWrapper,
)``

export const VideoItemDetailsPage = styled(TrendingPage)``

export const ReactPlayerAndDetailsWrapper = styled.div`
  padding: 0px;

  @media screen and (min-width: 768px) {
    padding: 30px 50px 50px;
  }
`

export const ReactPlayerContainer = styled.div`
  width: 100%;
  height: 250px;

  @media screen and (min-width: 768px) {
    height: 460px;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.darkMode ? '#cbd5e1' : '#181818')};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`

export const VideoDetailsFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoDetailsContainer = styled.div`
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

export const VideoViewCountAndTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ViewsCountText = styled.p`
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
`

export const Time = styled(ViewsCountText)``

export const VideoReactionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const VideoReactionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: inherit;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
`

export const ReactionType = styled.p`
  font-weight: 500;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`

export const Separator = styled.hr`
  width: 100%;
  border: 1px solid ${props => (props.darkMode ? '#64748b' : '#d7dfe9')};
  margin: 30px 0;
`

export const VideoChannelDetails = styled.div`
  display: flex;
  gap: 16px;
`

export const VideoChannelImage = styled.img`
  width: 50px;
  height: 50px;
`

export const ChannelInfoContainer = styled.div``

export const ChannelName = styled.p`
  color: ${props => (props.darkMode ? '#cbd5e1' : '#181818')};
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
`

export const SubscriberCount = styled.p`
  color: #64748b;
  font-size: 14px;
`

export const DesktopChannelDescription = styled.p`
  display: none;
  line-height: 1.3;
  margin-top: 20px;
  color: ${props => (props.darkMode ? '#cbd5e1' : '#64748b')};

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const MobileChannelDescription = styled.p`
  color: ${props => (props.darkMode ? '#cbd5e1' : '#64748b')};
  font-size: 13px;
  line-height: 1.3;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
