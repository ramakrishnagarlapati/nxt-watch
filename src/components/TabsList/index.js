import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaGamepad} from 'react-icons/fa'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {ThemeContext} from '../../context/ThemeContext'
import {ActiveTabContext} from '../../context/ActiveTabContext'

import './index.css'
import {TabsListContainer, TabItem, TabText} from './styledComponents'

function TabsList(props) {
  const theme = useContext(ThemeContext)
  const activeTabContextObject = useContext(ActiveTabContext)
  const {activeTab} = activeTabContextObject.state
  const {darkMode} = theme.state

  const onClickTabItem = tabValue => {
    activeTabContextObject.dispatch({type: tabValue})
  }

  const {justifyContentValue} = props

  return (
    <TabsListContainer justifyContentValue={justifyContentValue}>
      <TabItem darkMode={darkMode} isActive={activeTab === 'home'}>
        <Link
          to="/"
          className="tab-link"
          onClick={() => onClickTabItem('home')}
        >
          <AiFillHome
            size={20}
            color={activeTab === 'home' ? '#ff0b37' : '#475569'}
          />
          <TabText isActive={activeTab === 'home'} darkMode={darkMode}>
            Home
          </TabText>
        </Link>
      </TabItem>
      <TabItem darkMode={darkMode} isActive={activeTab === 'trending'}>
        <Link
          to="/trending"
          className="tab-link"
          onClick={() => onClickTabItem('trending')}
        >
          <AiFillFire
            size={20}
            color={activeTab === 'trending' ? '#ff0b37' : '#475569'}
          />
          <TabText isActive={activeTab === 'trending'} darkMode={darkMode}>
            Trending
          </TabText>
        </Link>
      </TabItem>
      <TabItem darkMode={darkMode} isActive={activeTab === 'gaming'}>
        <Link
          to="/gaming"
          className="tab-link"
          onClick={() => onClickTabItem('gaming')}
        >
          <FaGamepad
            size={20}
            color={activeTab === 'gaming' ? '#ff0b37' : '#475569'}
          />
          <TabText isActive={activeTab === 'gaming'} darkMode={darkMode}>
            Gaming
          </TabText>
        </Link>
      </TabItem>
      <TabItem darkMode={darkMode} isActive={activeTab === 'savedVideos'}>
        <Link
          to="/saved-videos"
          className="tab-link"
          onClick={() => onClickTabItem('savedVideos')}
        >
          <BiListPlus
            size={20}
            color={activeTab === 'savedVideos' ? '#ff0b37' : '#475569'}
          />
          <TabText isActive={activeTab === 'savedVideos'} darkMode={darkMode}>
            Saved Videos
          </TabText>
        </Link>
      </TabItem>
    </TabsListContainer>
  )
}
export default TabsList
