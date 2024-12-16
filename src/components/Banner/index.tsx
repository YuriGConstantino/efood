import { BannerContainer, Text } from './styles'
import Logo from '../../assets/images/logo.png'

export const Banner = () => (
  <BannerContainer>
    <div className="container">
      <h1>
        <img src={Logo} alt="" />
      </h1>
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </div>
  </BannerContainer>
)
