import styled from 'styled-components'

export const GameCardContainer = styled.div`
  flex-basis: 45%;

  @media screen and (min-width: 576px) {
    flex-basis: 30%;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 23%;
  }
`

export const GameCardImage = styled.img`
  width: 100%;
  max-height: 400px;
`

export const GameCardTitle = styled.p`
  font-weight: 500;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#2f353d')};

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const GameCardViewsCount = styled.p`
  line-height: 1.3;
  font-weight: 500;
  color: #616e7c;
`
