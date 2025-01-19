import { RootReducer } from '../../store'
import {
  Container,
  CartContanier,
  ItemCard,
  RemoveBtn,
  InputFild,
  ButtonContainer
} from './styled'
import trash from '../../assets/images/close2.png'
import { Overlay } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'

export const Cart = () => {
  const [goCheckout, setGoCheckout] = useState(false)
  const [goPayment, setGoPayment] = useState(false)
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
    <>
      <Container className={isOpen ? 'showCart' : ''}>
        <Overlay onClick={closeCart} />
        {!goCheckout ? (
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
            <button onClick={() => setGoCheckout(true)}>
              Continuar com a entrega
            </button>
          </CartContanier>
        ) : (
          <CartContanier>
            {!goPayment ? (
              <>
                <h3>Entrega</h3>
                <form>
                  <InputFild>
                    <label htmlFor="WhoReceiver">Quem irá receber</label>
                    <input type="text" />
                  </InputFild>
                  <InputFild>
                    <label htmlFor="Address">Endereço</label>
                    <input type="text" />
                  </InputFild>
                  <InputFild>
                    <label htmlFor="City">Cidade</label>
                    <input type="text" />
                  </InputFild>
                  <InputFild inputWidth="155px">
                    <label htmlFor="CEP">CEP</label>
                    <input type="text" />
                  </InputFild>
                  <InputFild inputWidth="155px">
                    <label htmlFor="Number">Número</label>
                    <input type="number" />
                  </InputFild>
                  <InputFild>
                    <label htmlFor="Complement">Complemento (opcional)</label>
                    <input type="text" />
                  </InputFild>
                  <ButtonContainer>
                    <button onClick={() => setGoPayment(true)}>
                      Continuar com o pagamento
                    </button>
                    <button onClick={() => setGoCheckout(false)}>
                      Voltar para o carrinho
                    </button>
                  </ButtonContainer>
                </form>
              </>
            ) : (
              <>
                <h3>
                  Pagamento - Valor a pagar {priceFormat(getTotalPrice())}
                </h3>
                <form>
                  <InputFild>
                    <label htmlFor="CardHolder">Nome no cartão</label>
                    <input type="text" />
                  </InputFild>
                  <InputFild inputWidth="228px">
                    <label htmlFor="CardNumber">Número do cartão</label>
                    <input type="text" />
                  </InputFild>
                  <InputFild inputWidth="87px">
                    <label htmlFor="CardCVV">CVV</label>
                    <input type="number" />
                  </InputFild>
                  <InputFild inputWidth="155px">
                    <label htmlFor="CardExpirationMonth">
                      Mês de vencimento
                    </label>
                    <input type="number" />
                  </InputFild>
                  <InputFild inputWidth="155px">
                    <label htmlFor="CardExpirationYear">
                      Ano de vencimento
                    </label>
                    <input type="number" />
                  </InputFild>
                  <ButtonContainer>
                    <button onClick={() => ''}>Finalizar pagamento</button>
                    <button onClick={() => setGoPayment(false)}>
                      Voltar para a edição de endereço
                    </button>
                  </ButtonContainer>
                </form>
              </>
            )}
          </CartContanier>
        )}
      </Container>
    </>
  )
}
