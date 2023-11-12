import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
`

export const BannerCloseButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 5px;
`

export const BannerLogoImage = styled.img`
  width: 150px;
`

export const BannerDescription = styled.p`
  margin: 16px 0;
  line-height: 1.5;
  font-size: 18px;
  max-width: 200px;

  @media screen and (min-width: 576px) {
    max-width: 350px;
    margin: 24px 0;
  }
`

export const BannerButton = styled.button`
  font-family: inherit;
  font-size: 18px;
  font-weight: 500px;
  border: 1px solid #0f0f0f;
  border-radius: 2px;
  color: #0f0f0f;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  align-self: flex-start;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
