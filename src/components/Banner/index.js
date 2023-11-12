import {AiOutlineClose} from 'react-icons/ai'

import {
  BannerContainer,
  BannerCloseButton,
  BannerLogoImage,
  BannerDescription,
  BannerButton,
} from './styledComponents'

function Banner(params) {
  const {showOrCloseBanner} = params
  const onClickBannerCloseBtn = () => {
    showOrCloseBanner()
  }
  return (
    <BannerContainer>
      <BannerCloseButton onClick={onClickBannerCloseBtn}>
        <AiOutlineClose size={24} />
      </BannerCloseButton>
      <BannerLogoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="banner logo"
      />
      <BannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerDescription>
      <BannerButton type="button">GET IT NOW</BannerButton>
    </BannerContainer>
  )
}
export default Banner
