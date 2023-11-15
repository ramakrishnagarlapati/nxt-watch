import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import {ThemeContext} from '../../context/ThemeContext'

import './index.css'
import {
  VideoCardItem,
  VideoCardImage,
  VideoDetailsAndChannelLogoWrapper,
  ChanelLogo,
  VideoCardDetails,
  VideoCardTitle,
  VideoCardChannelName,
  ViewsCountAndTimeWrapper,
  ViewsCount,
  Time,
} from './styledComponents'

function VideoCard(params) {
  const {videoItemDetails} = params
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoItemDetails

  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  return (
    <VideoCardItem>
      <Link to={`/videos/${id}`} className="video-card-link">
        <VideoCardImage src={thumbnailUrl} alt="video thumbnail" />

        <VideoDetailsAndChannelLogoWrapper>
          <ChanelLogo src={channel.profileImageUrl} alt="channel logo" />
          <VideoCardDetails>
            <VideoCardTitle darkMode={darkMode}>{title}</VideoCardTitle>
            <VideoCardChannelName>{channel.name}</VideoCardChannelName>
            <ViewsCountAndTimeWrapper>
              <ViewsCount>{viewCount} views</ViewsCount>
              <BsDot color="#64748b" />
              <Time>
                {formatDistanceToNow(new Date(publishedAt))
                  .split(' ')
                  .slice(1)
                  .join(' ')}{' '}
                ago
              </Time>
            </ViewsCountAndTimeWrapper>
          </VideoCardDetails>
        </VideoDetailsAndChannelLogoWrapper>
      </Link>
    </VideoCardItem>
  )
}

export default VideoCard
