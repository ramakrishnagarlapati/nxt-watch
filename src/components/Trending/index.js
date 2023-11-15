import {useContext, useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'
import apiStatusConstants from '../../utilities/apiStatusConstants'
import {ThemeContext} from '../../context/ThemeContext'
import convertResponseObjectToJsObject from '../../utilities/convertResponseObjectToJsObject'
import {
  TrendingPageContainer,
  TrendingContentAndSidebarWrapper,
  LoaderContainer,
  TrendingPage,
  TrendingVideosListAndHeaderWrapper,
  TrendingHeader,
  TrendingIconBackgroundContainer,
  TrendingHeading,
  TrendingVideosList,
} from './styledComponents'

function Trending() {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [trendingVideosList, setTrendingVideosList] = useState([])
  const getTrendingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    if (response.ok) {
      const data = await response.json()
      setTrendingVideosList(convertResponseObjectToJsObject(data.videos))
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }
  useEffect(() => {
    getTrendingVideos()
  }, [])

  const retryFetching = () => {
    getTrendingVideos()
  }

  const renderFailureView = () => <FailureView retryFetching={retryFetching} />

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  const renderTrendingVideosListView = () => (
    <TrendingVideosListAndHeaderWrapper>
      <TrendingHeader>
        <TrendingIconBackgroundContainer darkMode={darkMode}>
          <AiFillFire size={30} color="#ff0b37" />
        </TrendingIconBackgroundContainer>
        <TrendingHeading darkMode={darkMode}>Trending</TrendingHeading>
      </TrendingHeader>
      <TrendingVideosList>
        {trendingVideosList.map(videoItem => (
          <VideoCard key={videoItem.id} videoItemDetails={videoItem} />
        ))}
      </TrendingVideosList>
    </TrendingVideosListAndHeaderWrapper>
  )

  const renderViewBasedOnApi = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderTrendingVideosListView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }
  return (
    <TrendingPageContainer data-testid="trending" darkMode={darkMode}>
      <Header />
      <TrendingContentAndSidebarWrapper>
        <Sidebar />
        <TrendingPage>{renderViewBasedOnApi()}</TrendingPage>
      </TrendingContentAndSidebarWrapper>
    </TrendingPageContainer>
  )
}

export default Trending
