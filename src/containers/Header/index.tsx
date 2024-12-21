import Logo from '../../assets/images/logo.png'
import { HeaderContainer, HeaderContent, Text } from './styles'
import { Button } from '../../components/Button'

type Props = {
  showRestaurantPerfil: boolean
}

export const Header = ({ showRestaurantPerfil }: Props) => (
  <HeaderContainer>
    <div className="container">
      {showRestaurantPerfil ? (
        <>
          <h1>
            <img src={Logo} alt="efood" />
          </h1>
          <HeaderContent>
            <Button className="button" title="restaurnt" type="link" to={'/'}>
              Restaurantes
            </Button>
            <Button className="button" title="cart" type="button">
              <span className="buttonTxt">0 produto(s) no carrinho</span>
            </Button>
          </HeaderContent>
        </>
      ) : (
        <>
          <h1>
            <img src={Logo} alt="efood" />
          </h1>
          <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
        </>
      )}
    </div>
  </HeaderContainer>
)
