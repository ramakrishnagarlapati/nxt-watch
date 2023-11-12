import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import FailureView from '../FailureView'
import HomePageVideoItem from '../HomePageVideoItem'
import {ThemeContext} from '../../context/ThemeContext'

import {
  HomePageContainer,
  HomeContentAndSidebarWrapper,
  BannerAndHomeContentWrapper,
  HomeContent,
  InputContainer,
  HomeSearchInput,
  HomeSearchButton,
  HomePageVideosListContainer,
  LoaderContainer,
  VideosList,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  NoVideosRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

function Home() {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const [searchInput, setSearchInput] = useState('')
  const [showBanner, setShowBanner] = useState(true)
  const [homePageVideosList, setHomePageVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getVideosFromApi = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      options,
    )
    if (response.ok) {
      const data = await response.json()
      setHomePageVideosList(
        data.videos.map(item => ({
          id: item.id,
          channel: {
            name: item.channel.name,
            profileImageUrl: item.channel.profile_image_url,
          },
          publishedAt: item.published_at,
          thumbnailUrl: item.thumbnail_url,
          title: item.title,
          viewsCount: item.view_count,
        })),
      )
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getVideosFromApi()
  }, [])

  const showOrCloseBanner = () => {
    setShowBanner(!showBanner)
  }

  const onKeyDownSearchInput = event => {
    if (event.key === 'Enter') {
      getVideosFromApi()
    }
  }

  const onClickSearchBtn = () => {
    getVideosFromApi()
  }

  const retryFetching = () => {
    getVideosFromApi()
  }

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  const renderFailureView = () => <FailureView retryFetching={retryFetching} />

  const renderVideosListView = () =>
    homePageVideosList.length === 0 ? (
      <NoVideosViewContainer>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideosHeading>No Search results found</NoVideosHeading>
        <NoVideosDescription>
          Try different key words or remove search filter
        </NoVideosDescription>
        <NoVideosRetryButton type="button">Retry</NoVideosRetryButton>
      </NoVideosViewContainer>
    ) : (
      <VideosList>
        {homePageVideosList.map(videoItem => (
          <HomePageVideoItem key={videoItem.id} videoItemDetails={videoItem} />
        ))}
      </VideosList>
    )

  const renderViewBasedOnApi = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderVideosListView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <HomePageContainer data-testid="home" darkMode={darkMode}>
      <Header />
      <HomeContentAndSidebarWrapper>
        <Sidebar />
        <BannerAndHomeContentWrapper>
          {showBanner && <Banner showOrCloseBanner={showOrCloseBanner} />}
          <HomeContent>
            <InputContainer darkMode={darkMode}>
              <HomeSearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={onKeyDownSearchInput}
                darkMode={darkMode}
              />
              <HomeSearchButton
                type="button"
                darkMode={darkMode}
                onClick={onClickSearchBtn}
              >
                <AiOutlineSearch size={24} color="#a6a6a6" />
              </HomeSearchButton>
            </InputContainer>
            <HomePageVideosListContainer>
              {renderViewBasedOnApi()}
            </HomePageVideosListContainer>
          </HomeContent>
        </BannerAndHomeContentWrapper>
      </HomeContentAndSidebarWrapper>
    </HomePageContainer>
  )
}
export default Home
