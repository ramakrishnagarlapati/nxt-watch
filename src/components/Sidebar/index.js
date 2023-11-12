import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaGamepad} from 'react-icons/fa'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import TabsList from '../TabsList'
import {ThemeContext} from '../../context/ThemeContext'
import {ActiveTabContext} from '../../context/ActiveTabContext'

import {SideBarContainer} from './styledComponents'

function Sidebar() {
  const theme = useContext(ThemeContext)
  const activeTabContextObject = useContext(ActiveTabContext)
  const {activeTab} = activeTabContextObject.state
  const {darkMode} = theme.state
  return (
    <SideBarContainer darkMode={darkMode}>
      <TabsList justifyContentValue="flex-start" />
    </SideBarContainer>
  )
}
export default Sidebar
