import { RootReducer } from '../../store'
import { Container, CartContanier, ItemCard, RemoveBtn } from './styled'
import trash from '../../assets/images/close_2.png'
import { Overlay } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeCart = (id: number) => {
    dispatch(remove(id))
  }
  const priceFormat = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  return (
    <Container className={isOpen ? 'showCart' : ''}>
      <Overlay onClick={closeCart} />
      <CartContanier>
        {items.length >= 1 ? (
          <ul>
            {items.map((items) => (
              <ItemCard key={items.id}>
                <img src={items.foto} alt={items.nome} />
                <p>
                  {items.nome} <span>{priceFormat(items.preco)}</span>
                </p>
                <RemoveBtn onClick={() => removeCart(items.id)}>
                  <img src={trash} alt="Remover do carrinho" />
                </RemoveBtn>
              </ItemCard>
            ))}
          </ul>
        ) : (
          <p>O carrinho está vazio</p>
        )}
        <p>
          Valor total <span>{priceFormat(getTotalPrice())}</span>
        </p>
        <button>Continuar com a entrega</button>
      </CartContanier>
    </Container>
  )
}
