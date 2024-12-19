import Logo from '../../assets/images/logo.png'
import { HeaderContainer, Text } from './styles'

export const Header = () => (
  <HeaderContainer>
    <div className="container">
      <h1>
        <img src={Logo} alt="" />
      </h1>
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </div>
  </HeaderContainer>
)
