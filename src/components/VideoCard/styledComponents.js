import styled from 'styled-components'

export const VideoCardItem = styled.li`
  flex-grow: 1;
`

export const VideoCardImage = styled.img`
  width: 100%;
  height: 200px;
  flex-shrink: 1;

  @media screen and (min-width: 576px) {
    width: 350px;
  }
`

export const VideoDetailsAndChannelLogoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`

export const ChanelLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 16px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: 576px) {
    gap: 10px;
  }
`

export const VideoCardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#2f353d')};
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`

export const VideoCardChannelName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #616e7c;
`

export const ViewsCountAndTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ViewsCount = styled(VideoCardChannelName)``

export const Time = styled(VideoCardChannelName)``
