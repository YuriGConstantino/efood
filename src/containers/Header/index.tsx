import Logo from '../../assets/images/logo.png'
import { HeaderContainer, Text } from './styles'

type Props = {
  showRestaurantMenu: boolean
}

export const Header = ({ showRestaurantMenu }: Props) => (
  <HeaderContainer>
    <div className="container">
      <h1>
        <img src={Logo} alt="" />
      </h1>
      {showRestaurantMenu ? (
        <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
      ) : (
        <div>AAAAA</div>
      )}
    </div>
  </HeaderContainer>
)
