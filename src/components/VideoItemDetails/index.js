import {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import {LoaderContainer} from '../Trending/styledComponents'
import apiStatusConstants from '../../utilities/apiStatusConstants'
import {ThemeContext} from '../../context/ThemeContext'
import {SavedVideosContext} from '../../context/SavedVideosContext'
import {
  VideoItemDetailsPageContainer,
  VideoItemDetailsPage,
  VideoContentAndSidebarWrapper,
  ReactPlayerAndDetailsWrapper,
  ReactPlayerContainer,
  VideoDetailsFlexContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoViewCountAndTimeWrapper,
  ViewsCountText,
  Time,
  VideoReactionButtonsContainer,
  VideoReactionButton,
  ReactionType,
  Separator,
  VideoChannelDetails,
  VideoChannelImage,
  ChannelInfoContainer,
  ChannelName,
  SubscriberCount,
  DesktopChannelDescription,
  MobileChannelDescription,
} from './styledComponents'

function VideoItemDetails() {
  const {id: videoId} = useParams()
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const savedVideosContextObject = useContext(SavedVideosContext)
  const {savedVideos} = savedVideosContextObject.state
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videoDetails, setVideoDetails] = useState(null)
  const [isVideoLiked, setIsVideoLiked] = useState(false)
  const [isVideoDisliked, setIsVideoDisliked] = useState(false)
  const [isVideoSaved, setIsVideoSaved] = useState(
    savedVideos.map(item => item.id).includes(videoId),
  )
  const getVideoDetails = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/${videoId}`,
      options,
    )
    if (response.ok) {
      const data = await response.json()
      const {video_details: videoDetailsObject} = data
      setVideoDetails({
        id: videoDetailsObject.id,
        title: videoDetailsObject.title,
        channel: {
          name: videoDetailsObject.channel.name,
          profileImageUrl: videoDetailsObject.channel.profile_image_url,
          subscriberCount: videoDetailsObject.channel.subscriber_count,
        },
        description: videoDetailsObject.description,
        publishedAt: videoDetailsObject.published_at,
        thumbnailUrl: videoDetailsObject.thumbnail_url,
        videoUrl: videoDetailsObject.video_url,
        viewCount: videoDetailsObject.view_count,
      })
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }
  useEffect(() => {
    getVideoDetails()
  }, [])

  const retryFetching = () => {
    getVideoDetails()
  }

  const onClickSaveButton = () => {
    console.log(savedVideos)
    const index = savedVideos.findIndex(item => item.id === videoId)
    if (index === -1) {
      savedVideosContextObject.dispatch({
        type: 'ADD',
        payload: videoDetails,
      })
    } else {
      savedVideosContextObject.dispatch({
        type: 'REMOVE',
        payload: {id: videoId},
      })
    }
    setIsVideoSaved(!isVideoSaved)
  }

  const onClickLikeButton = () => {
    setIsVideoLiked(!isVideoLiked)
    setIsVideoDisliked(false)
  }

  const onClickDislikeButton = () => {
    setIsVideoDisliked(!isVideoDisliked)
    setIsVideoLiked(false)
  }

  const renderFailureView = () => <FailureView retryFetching={retryFetching} />

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  const renderVideoDetailsView = () => {
    const {
      id,
      title,
      channel,
      description,
      publishedAt,
      videoUrl,
      viewCount,
    } = videoDetails
    return (
      <ReactPlayerAndDetailsWrapper>
        <ReactPlayerContainer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </ReactPlayerContainer>

        <VideoDetailsContainer>
          <VideoTitle darkMode={darkMode}>{title}</VideoTitle>
          <VideoDetailsFlexContainer>
            <VideoViewCountAndTimeWrapper>
              <ViewsCountText>{viewCount} views</ViewsCountText>
              <BsDot color="#64748b" />
              <Time>
                {formatDistanceToNow(new Date(publishedAt))
                  .split(' ')
                  .slice(1)
                  .join(' ')}{' '}
                ago
              </Time>
            </VideoViewCountAndTimeWrapper>
            <VideoReactionButtonsContainer>
              <VideoReactionButton type="button" onClick={onClickLikeButton}>
                <FaRegThumbsUp
                  size={18}
                  color={isVideoLiked ? '#2563eb' : '#64748b'}
                />
                <ReactionType isActive={isVideoLiked}>Like</ReactionType>
              </VideoReactionButton>
              <VideoReactionButton type="button" onClick={onClickDislikeButton}>
                <FaRegThumbsDown
                  size={18}
                  color={isVideoDisliked ? '#2563eb' : '#64748b'}
                />
                <ReactionType isActive={isVideoDisliked}>Dislike</ReactionType>
              </VideoReactionButton>
              <VideoReactionButton type="button" onClick={onClickSaveButton}>
                <BiListPlus
                  size={25}
                  color={isVideoSaved ? '#2563eb' : '#64748b'}
                />
                <ReactionType isActive={isVideoSaved}>
                  {isVideoSaved ? 'Saved' : 'Save'}
                </ReactionType>
              </VideoReactionButton>
            </VideoReactionButtonsContainer>
          </VideoDetailsFlexContainer>
          <Separator darkMode={darkMode} />
          <VideoChannelDetails>
            <VideoChannelImage
              src={channel.profileImageUrl}
              alt="channel logo"
            />
            <ChannelInfoContainer>
              <ChannelName darkMode={darkMode}>{channel.name}</ChannelName>
              <SubscriberCount>
                {channel.subscriberCount} subscribers
              </SubscriberCount>
              <DesktopChannelDescription>
                {description}
              </DesktopChannelDescription>
            </ChannelInfoContainer>
          </VideoChannelDetails>
          <MobileChannelDescription darkMode={darkMode}>
            {description}
          </MobileChannelDescription>
        </VideoDetailsContainer>
      </ReactPlayerAndDetailsWrapper>
    )
  }

  const renderViewBasedOnApi = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderVideoDetailsView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }
  return (
    <VideoItemDetailsPageContainer
      data-testid="videoItemDetails"
      darkMode={darkMode}
    >
      <Header />
      <VideoContentAndSidebarWrapper>
        <Sidebar />
        <VideoItemDetailsPage>{renderViewBasedOnApi()}</VideoItemDetailsPage>
      </VideoContentAndSidebarWrapper>
    </VideoItemDetailsPageContainer>
  )
}

export default VideoItemDetails
