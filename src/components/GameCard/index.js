import {useContext} from 'react'
import {Link} from 'react-router-dom'

import {ThemeContext} from '../../context/ThemeContext'

import './index.css'
import {
  GameCardContainer,
  GameCardImage,
  GameCardTitle,
  GameCardViewsCount,
} from './styledComponents'

function GameCard(params) {
  const {gameDetails} = params
  const {id, thumbnailUrl, viewCount, title} = gameDetails
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  return (
    <GameCardContainer>
      <Link to={`videos/${id}`} className="game-card-link">
        <GameCardImage src={thumbnailUrl} alt="video thumbnail" />
        <GameCardTitle darkMode={darkMode}>{title}</GameCardTitle>
        <GameCardViewsCount>{viewCount} Watching Worldwide</GameCardViewsCount>
      </Link>
    </GameCardContainer>
  )
}

export default GameCard
