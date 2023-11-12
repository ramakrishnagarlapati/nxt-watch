import styled from 'styled-components'

export const VideoItem = styled.li`
  list-style-type: none;
  flex-basis: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    flex-basis: 45%;
  }
  @media screen and (min-width: 765px) {
    flex-basis: 30%;
  }
`

export const VideoItemImage = styled.img`
  width: 100%;
`

export const VideoChannelImageAndDetailsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`

export const VideoChannelProfileImage = styled.img`
  width: 35px;
  height: 35px;
`

export const VideoDetailsContainer = styled.div``

export const VideoDetails = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`

export const VideoDetail = styled.p`
  font-size: 12px;
  color: ${props => (props.darkMode ? '#a3a4a4' : '#212121')};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoTitle = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${props => (props.darkMode ? '#cbd5e1' : '#475569')};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
