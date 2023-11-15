import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

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
  VideoDetailChannelName,
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
    viewCount,
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
            <VideoDetailChannelName darkMode={darkMode}>
              {channel.name}
            </VideoDetailChannelName>
            <VideoDetails>
              <VideoDetail darkMode={darkMode}>{viewCount} Views</VideoDetail>
              <BsDot color="#64748b" />
              <VideoDetail darkMode={darkMode}>
                {formatDistanceToNow(new Date(publishedAt))
                  .split(' ')
                  .slice(1)
                  .join(' ')}{' '}
                ago
              </VideoDetail>
            </VideoDetails>
          </VideoDetailsContainer>
        </VideoChannelImageAndDetailsWrapper>
      </Link>
    </VideoItem>
  )
}
export default HomePageVideoItem
