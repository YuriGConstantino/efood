import Logo from '../../assets/images/logo.png'
import * as S from './styles'
import { Button } from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { Cart } from '../../containers/Cart'
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
      <S.HeaderContainer>
        <div className="container">
          {showRestaurantPerfil ? (
            <>
              <h1>
                <img src={Logo} alt="efood" />
              </h1>
              <S.HeaderContent>
                <Button className="button" type="link" to={'/'}>
                  Restaurantes
                </Button>
                <Button onClick={OpenCart} type="button" className="button">
                  <span className="buttonTxt">
                    {items.length} produto(s) no carrinho
                  </span>
                </Button>
              </S.HeaderContent>
            </>
          ) : (
            <>
              <h1>
                <img src={Logo} alt="efood" />
              </h1>
              <p>Viva experiências gastronômicas no conforto da sua casa</p>
            </>
          )}
        </div>
      </S.HeaderContainer>
      <Cart />
    </>
  )
}
