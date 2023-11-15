import {useContext} from 'react'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import {SavedVideosContext} from '../../context/SavedVideosContext'
import {ThemeContext} from '../../context/ThemeContext'

import {
  SavedVideosPageContainer,
  SavedVideosContentAndSidebarWrapper,
  SavedVideosPage,
  SavedVideosListAndHeaderWrapper,
  SavedVideosHeader,
  SavedVideosIconBackgroundContainer,
  SavedVideosHeading,
  SavedVideosList,
  NoSavedVideosViewContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

function SavedVideos() {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const savedVideosContext = useContext(SavedVideosContext)
  const {savedVideos} = savedVideosContext.state
  const noVideosView = () => (
    <NoSavedVideosViewContainer>
      <NoSavedVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedVideosHeading darkMode={darkMode}>
        No Saved Videos found
      </NoSavedVideosHeading>
      <NoSavedVideosDescription darkMode={darkMode}>
        You can save your videos while watching them
      </NoSavedVideosDescription>
    </NoSavedVideosViewContainer>
  )
  const renderSavedVideosList = () => (
    <SavedVideosListAndHeaderWrapper>
      <SavedVideosHeader>
        <SavedVideosIconBackgroundContainer darkMode={darkMode}>
          <BiListPlus size={30} color="#ff0b37" />
        </SavedVideosIconBackgroundContainer>
        <SavedVideosHeading darkMode={darkMode}>
          Saved Videos
        </SavedVideosHeading>
      </SavedVideosHeader>
      <SavedVideosList>
        {savedVideos.map(videoItem => (
          <VideoCard key={videoItem.id} videoItemDetails={videoItem} />
        ))}
      </SavedVideosList>
    </SavedVideosListAndHeaderWrapper>
  )
  return (
    <SavedVideosPageContainer data-testid="savedVideos" darkMode={darkMode}>
      <Header />
      <SavedVideosContentAndSidebarWrapper>
        <Sidebar />
        <SavedVideosPage>
          {savedVideos.length === 0 ? noVideosView() : renderSavedVideosList()}
        </SavedVideosPage>
      </SavedVideosContentAndSidebarWrapper>
    </SavedVideosPageContainer>
  )
}

export default SavedVideos
