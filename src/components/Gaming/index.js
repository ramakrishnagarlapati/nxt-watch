import {useContext, useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GameCard from '../GameCard'
import FailureView from '../FailureView'
import apiStatusConstants from '../../utilities/apiStatusConstants'
import {ThemeContext} from '../../context/ThemeContext'
import convertResponseObjectToJsObject from '../../utilities/convertResponseObjectToJsObject'
import {LoaderContainer} from '../Trending/styledComponents'
import {
  GamingPageContainer,
  GamingContentAndSidebarWrapper,
  GamingPage,
  GamesListAndHeaderWrapper,
  GamingHeader,
  GamingIconBackgroundContainer,
  GamingHeading,
  GamesList,
} from './styledComponents'

function Gaming() {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [gamesList, setGamesList] = useState([])
  const getGamesList = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    if (response.ok) {
      const data = await response.json()
      setGamesList(
        data.videos.map(video => ({
          id: video.id,
          thumbnailUrl: video.thumbnail_url,
          title: video.title,
          viewCount: video.view_count,
        })),
      )
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }
  useEffect(() => {
    getGamesList()
  }, [])

  const retryFetching = () => {
    getGamesList()
  }

  const renderFailureView = () => <FailureView retryFetching={retryFetching} />

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  const renderGamingListView = () => (
    <GamesListAndHeaderWrapper>
      <GamingHeader>
        <GamingIconBackgroundContainer>
          <FaGamepad size={30} color="#ff0b37" />
        </GamingIconBackgroundContainer>
        <GamingHeading darkMode={darkMode}>Gaming</GamingHeading>
      </GamingHeader>
      <GamesList>
        {gamesList.map(game => (
          <GameCard key={game.id} gameDetails={game} />
        ))}
      </GamesList>
    </GamesListAndHeaderWrapper>
  )

  const renderViewBasedOnApi = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderGamingListView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }
  return (
    <GamingPageContainer data-testid="gaming" darkMode={darkMode}>
      <Header />
      <GamingContentAndSidebarWrapper>
        <Sidebar />
        <GamingPage>{renderViewBasedOnApi()}</GamingPage>
      </GamingContentAndSidebarWrapper>
    </GamingPageContainer>
  )
}

export default Gaming
