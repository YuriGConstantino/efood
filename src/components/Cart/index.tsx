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
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
  const formCheckout = useFormik({
    initialValues: {
      WhoReceiver: '',
      Address: '',
      City: '',
      CEP: '',
      Number: '',
      Complement: ''
    },
    validationSchema: Yup.object({
      WhoReceiver: Yup.string()
        .min(5, 'O nome precisar ter mais de 5 caracteres')
        .required('O campo é obrigatorio'),
      Address: Yup.string()
        .min(5, 'o enderenço precisa ter mais de 5 caracteres')
        .required('O campo é obrigatorio'),
      City: Yup.string().required('O campo é obrigatorio'),
      CEP: Yup.string().required('O campo é obrigatorio'),
      Number: Yup.number().required('O campo é obrigatorio'),
      Complement: Yup.string()
    }),
    onSubmit: () => {
      setGoPayment(true)
    }
  })

  const formPayment = useFormik({
    initialValues: {
      CardHolder: '',
      CardNumber: '',
      CardCVV: '',
      CardExpirationMonth: '',
      CardExpirationYear: ''
    },
    validationSchema: Yup.object({
      CardHolder: Yup.string().required('O campo é obrigatorio'),
      CardNumber: Yup.number()
        .min(16, '')
        .max(19, '')
        .required('O campo é obrigatorio'),
      CardCVV: Yup.number()
        .min(3, '')
        .max(3, '')
        .required('O campo é obrigatorio'),
      CardExpirationMonth: Yup.number()
        .min(2, 'Coloque o mês de vencimento do cartão')
        .max(2, '')
        .required('O campo é obrigatorio'),
      CardExpirationYear: Yup.number()
        .min(2, 'Coloque o ano de vencimento do cartão')
        .max(2, '')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessageformCheckout = (fildName: string, message?: string) => {
    const isTouched = fildName in formCheckout.touched
    const isInvalid = fildName in formCheckout.errors
    if (isTouched && isInvalid) return message
    return ''
  }
  const getErrorMessageformPayment = (fildName: string, message?: string) => {
    const isTouched = fildName in formPayment.touched
    const isInvalid = fildName in formPayment.errors
    if (isTouched && isInvalid) return message
    return ''
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
                <form onSubmit={formCheckout.handleSubmit}>
                  <InputFild>
                    <label htmlFor="WhoReceiver">Quem irá receber</label>
                    <input
                      type="text"
                      name="WhoReceiver"
                      value={formCheckout.values.WhoReceiver}
                      onChange={formCheckout.handleChange}
                    />
                    <small>
                      {getErrorMessageformCheckout(
                        'WhoReceiver',
                        formCheckout.errors.WhoReceiver
                      )}
                    </small>
                  </InputFild>
                  <InputFild>
                    <label htmlFor="Address">Endereço</label>
                    <input
                      type="text"
                      name="Address"
                      value={formCheckout.values.Address}
                      onChange={formCheckout.handleChange}
                    />
                    <small>
                      {getErrorMessageformCheckout(
                        'Address',
                        formCheckout.errors.Address
                      )}
                    </small>
                  </InputFild>
                  <InputFild>
                    <label htmlFor="City">Cidade</label>
                    <input
                      type="text"
                      name="City"
                      value={formCheckout.values.City}
                      onChange={formCheckout.handleChange}
                    />
                    <small>
                      {getErrorMessageformCheckout(
                        'City',
                        formCheckout.errors.City
                      )}
                    </small>
                  </InputFild>
                  <InputFild inputwidth="155px">
                    <label htmlFor="CEP">CEP</label>
                    <input
                      type="text"
                      name="CEP"
                      value={formCheckout.values.CEP}
                      onChange={formCheckout.handleChange}
                    />
                    <small>
                      {getErrorMessageformCheckout(
                        'CEP',
                        formCheckout.errors.CEP
                      )}
                    </small>
                  </InputFild>
                  <InputFild inputwidth="155px">
                    <label htmlFor="Number">Número</label>
                    <input
                      type="number"
                      name="Number"
                      value={formCheckout.values.Number}
                      onChange={formCheckout.handleChange}
                    />
                    <small>
                      {getErrorMessageformCheckout(
                        'Number',
                        formCheckout.errors.Number
                      )}
                    </small>
                  </InputFild>
                  <InputFild>
                    <label htmlFor="Complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      name="Complement"
                      value={formCheckout.values.Complement}
                      onChange={formCheckout.handleChange}
                    />
                    <small>
                      {getErrorMessageformCheckout(
                        'Complement',
                        formCheckout.errors.Complement
                      )}
                    </small>
                  </InputFild>
                  <ButtonContainer>
                    <button onClick={() => ''}>
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
                <form onSubmit={formPayment.handleSubmit}>
                  <InputFild>
                    <label htmlFor="CardHolder">Nome no cartão</label>
                    <input
                      type="text"
                      name="CardHolder"
                      value={formPayment.values.CardHolder}
                      onChange={formPayment.handleChange}
                    />
                    <small>
                      {getErrorMessageformPayment(
                        'CardHolder',
                        formPayment.errors.CardHolder
                      )}
                    </small>
                  </InputFild>
                  <InputFild inputwidth="228px">
                    <label htmlFor="CardNumber">Número do cartão</label>
                    <input
                      type="text"
                      name="CardNumber"
                      value={formPayment.values.CardNumber}
                      onChange={formPayment.handleChange}
                    />
                    <small>
                      {getErrorMessageformPayment(
                        'CardNumber',
                        formPayment.errors.CardNumber
                      )}
                    </small>
                  </InputFild>
                  <InputFild inputwidth="87px">
                    <label htmlFor="CardCVV">CVV</label>
                    <input
                      type="number"
                      name="CardCVV"
                      value={formPayment.values.CardCVV}
                      onChange={formPayment.handleChange}
                    />
                    <small>
                      {getErrorMessageformPayment(
                        'CardCVV',
                        formPayment.errors.CardCVV
                      )}
                    </small>
                  </InputFild>
                  <InputFild inputwidth="155px">
                    <label htmlFor="CardExpirationMonth">
                      Mês de vencimento
                    </label>
                    <input
                      type="number"
                      name="CardExpirationMonth"
                      value={formPayment.values.CardExpirationMonth}
                      onChange={formPayment.handleChange}
                    />
                    <small>
                      {getErrorMessageformPayment(
                        'CardExpirationMonth',
                        formPayment.errors.CardExpirationMonth
                      )}
                    </small>
                  </InputFild>
                  <InputFild inputwidth="155px">
                    <label htmlFor="CardExpirationYear">
                      Ano de vencimento
                    </label>
                    <input
                      type="number"
                      name="CardExpirationYear"
                      value={formPayment.values.CardExpirationYear}
                      onChange={formPayment.handleChange}
                    />
                    <small>
                      {getErrorMessageformPayment(
                        'CardExpirationYear',
                        formPayment.errors.CardExpirationYear
                      )}
                    </small>
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
