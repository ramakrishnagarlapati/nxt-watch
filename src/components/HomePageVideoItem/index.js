import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {BsDot} from 'react-icons/bs'

import {ThemeContext} from '../../context/ThemeContext'

import './index.css'
import {
  VideoItem,
  VideoItemImage,
  VideoChannelImageAndDetailsWrapper,
  VideoChannelProfileImage,
  VideoDetailsContainer,
  VideoDetails,
  VideoTitle,
  VideoDetail,
} from './styledComponents'

function HomePageVideoItem(params) {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const {videoItemDetails} = params
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewsCount,
  } = videoItemDetails
  return (
    <VideoItem>
      <Link to={`/videos/${id}`} className="home-page-video-item-link">
        <VideoItemImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoChannelImageAndDetailsWrapper>
          <VideoChannelProfileImage
            src={channel.profileImageUrl}
            alt="channel logo"
          />
          <VideoDetailsContainer>
            <VideoTitle darkMode={darkMode}>{title}</VideoTitle>
            <VideoDetails>
              <VideoDetail darkMode={darkMode}>{channel.name}</VideoDetail>
              <BsDot color={darkMode ? '#a3a4a4' : '#475569'} />
              <VideoDetail darkMode={darkMode}>{viewsCount} Views</VideoDetail>
              <BsDot />
              <VideoDetail darkMode={darkMode}>{publishedAt}</VideoDetail>
            </VideoDetails>
          </VideoDetailsContainer>
        </VideoChannelImageAndDetailsWrapper>
      </Link>
    </VideoItem>
  )
}
export default HomePageVideoItem
