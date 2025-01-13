import Logo from '../../assets/images/logo.png'
import { HeaderContainer, HeaderContent, Text } from './styles'
import { Button } from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { Cart } from '../../components/Cart'
import { RootReducer } from '../../store'

type Props = {
  showRestaurantPerfil: boolean
}

export const Header = ({ showRestaurantPerfil }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const OpenCart = () => {
    dispatch(open())
  }
  return (
    <>
      <HeaderContainer>
        <div className="container">
          {showRestaurantPerfil ? (
            <>
              <h1>
                <img src={Logo} alt="efood" />
              </h1>
              <HeaderContent>
                <Button className="button" type="link" to={'/'}>
                  Restaurantes
                </Button>
                <Button onClick={OpenCart} type="button" className="button">
                  <span className="buttonTxt">
                    {items.length} produto(s) no carrinho
                  </span>
                </Button>
              </HeaderContent>
            </>
          ) : (
            <>
              <h1>
                <img src={Logo} alt="efood" />
              </h1>
              <Text>
                Viva experiências gastronômicas no conforto da sua casa
              </Text>
            </>
          )}
        </div>
      </HeaderContainer>
      <Cart />
    </>
  )
}
