import { RootReducer } from '../../store'
import * as S from './styled'
import trash from '../../assets/images/close2.png'
import { Overlay } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Field } from '../../components/InputField'

export const Cart = () => {
  const [goCheckout, setGoCheckout] = useState(false)
  const [goPayment, setGoPayment] = useState(false)
  const [completeOrder, setCompleteOrder] = useState(false)
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
    return items.reduce((accumulator, currentPrice) => {
      return (accumulator += currentPrice.preco)
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
      WhoReceiver: Yup.string().min(5, '').required(''),
      Address: Yup.string().min(5, '').required(''),
      City: Yup.string().required(''),
      CEP: Yup.string().required(''),
      Number: Yup.number().required(''),
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
      CardHolder: Yup.string().required(''),
      CardNumber: Yup.number().min(16, '').required(''),
      CardCVV: Yup.number().min(3, '').required(''),
      CardExpirationMonth: Yup.number().min(2, '').required(''),
      CardExpirationYear: Yup.number().min(2, '').required('')
    }),
    onSubmit: () => {
      setCompleteOrder(true)
    }
  })

  const getInputAddressErrors = (fieldName: string) => {
    const isTouched = fieldName in formCheckout.touched
    const isInvalid = fieldName in formCheckout.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const getInputPaymentErrors = (fieldName: string) => {
    const isTouched = fieldName in formPayment.touched
    const isInvalid = fieldName in formPayment.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const completeOrde = () => {
    window.location.reload()
  }

  return (
    <>
      <S.Container className={isOpen ? 'showCart' : ''}>
        <Overlay onClick={closeCart} />
        {!goCheckout ? (
          <S.CartContanier>
            {items.length >= 1 ? (
              <>
                <ul>
                  {items.map((items) => (
                    <S.ItemCard key={items.id}>
                      <img src={items.foto} alt={items.nome} />
                      <p>
                        {items.nome} <span>{priceFormat(items.preco)}</span>
                      </p>
                      <S.RemoveBtn onClick={() => removeCart(items.id)}>
                        <img src={trash} alt="Remover do carrinho" />
                      </S.RemoveBtn>
                    </S.ItemCard>
                  ))}
                </ul>
                <p>
                  Valor total <span>{priceFormat(getTotalPrice())}</span>
                </p>
                <button onClick={() => setGoCheckout(true)}>
                  Continuar com a entrega
                </button>
              </>
            ) : (
              <p>O carrinho está vazio</p>
            )}
          </S.CartContanier>
        ) : (
          //tela de checkout
          <S.CartContanier>
            {!goPayment ? (
              <>
                <h3>Entrega</h3>
                <form onSubmit={formCheckout.handleSubmit}>
                  <Field
                    htmlForm="WhoReceiver"
                    label="Quem irá receber"
                    type="text"
                    name="WhoReceiver"
                    value={formCheckout.values.WhoReceiver}
                    onChange={formCheckout.handleChange}
                    className={
                      getInputAddressErrors('WhoReceiver') ? 'error' : ''
                    }
                  />
                  <Field
                    htmlForm="Address"
                    label="Endereço"
                    type="text"
                    name="Address"
                    value={formCheckout.values.Address}
                    onChange={formCheckout.handleChange}
                    className={getInputAddressErrors('Address') ? 'error' : ''}
                  />
                  <Field
                    htmlForm="City"
                    label="Cidade"
                    type="text"
                    name="City"
                    value={formCheckout.values.City}
                    onChange={formCheckout.handleChange}
                    className={getInputAddressErrors('City') ? 'error' : ''}
                  />
                  <Field
                    inputwidth="155px"
                    htmlForm="CEP"
                    label="CEP"
                    type="text"
                    name="CEP"
                    value={formCheckout.values.CEP}
                    onChange={formCheckout.handleChange}
                    className={getInputAddressErrors('CEP') ? 'error' : ''}
                  />
                  <Field
                    inputwidth="155px"
                    htmlForm="Number"
                    label="Número"
                    type="number"
                    name="Number"
                    value={formCheckout.values.Number}
                    onChange={formCheckout.handleChange}
                    className={getInputAddressErrors('Number') ? 'error' : ''}
                  />
                  <Field
                    htmlForm="Complement"
                    label="Complemento (opcional)"
                    type="text"
                    name="Complement"
                    value={formCheckout.values.Complement}
                    onChange={formCheckout.handleChange}
                    className=""
                  />
                  <S.ButtonContainer>
                    <button type="submit">Continuar com o pagamento</button>
                    <button onClick={() => setGoCheckout(false)}>
                      Voltar para o carrinho
                    </button>
                  </S.ButtonContainer>
                </form>
              </>
            ) : (
              //tela de pagamento
              <>
                {!completeOrder ? (
                  <>
                    <h3>
                      Pagamento - Valor a pagar {priceFormat(getTotalPrice())}
                    </h3>
                    <form onSubmit={formPayment.handleSubmit}>
                      <Field
                        htmlForm="CardHolder"
                        label="Nome no cartão"
                        type="text"
                        name="CardHolder"
                        value={formPayment.values.CardHolder}
                        onChange={formPayment.handleChange}
                        className={
                          getInputPaymentErrors('CardHolder') ? 'error' : ''
                        }
                      />
                      <Field
                        inputwidth="228px"
                        htmlForm="CardNumber"
                        label="Número do cartão"
                        type="text"
                        name="CardNumber"
                        value={formPayment.values.CardNumber}
                        onChange={formPayment.handleChange}
                        className={
                          getInputPaymentErrors('CardNumber') ? 'error' : ''
                        }
                      />
                      <Field
                        inputwidth="87px"
                        htmlForm="CardCVV"
                        label="CVV"
                        type="number"
                        name="CardCVV"
                        value={formPayment.values.CardCVV}
                        onChange={formPayment.handleChange}
                        className={
                          getInputPaymentErrors('CardCVV') ? 'error' : ''
                        }
                      />
                      <Field
                        inputwidth="155px"
                        htmlForm="CardExpirationMonth"
                        label="Mês de vencimento"
                        type="number"
                        name="CardExpirationMonth"
                        value={formPayment.values.CardExpirationMonth}
                        onChange={formPayment.handleChange}
                        className={
                          getInputPaymentErrors('CardExpirationMonth')
                            ? 'error'
                            : ''
                        }
                      />
                      <Field
                        inputwidth="155px"
                        htmlForm="CardExpirationYear"
                        label="Ano de vencimento"
                        type="number"
                        name="CardExpirationYear"
                        value={formPayment.values.CardExpirationYear}
                        onChange={formPayment.handleChange}
                        className={
                          getInputPaymentErrors('CardExpirationYear')
                            ? 'error'
                            : ''
                        }
                      />
                      <S.ButtonContainer>
                        <button type="submit">Finalizar pagamento</button>
                        <button onClick={() => setGoPayment(false)}>
                          Voltar para a edição de endereço
                        </button>
                      </S.ButtonContainer>
                    </form>
                  </>
                ) : (
                  <>
                    <h3>Pedido realizado - ORDER_ID</h3>
                    <p className="textOrder">
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <p className="textOrder">
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                    </p>
                    <p className="textOrder">
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <p className="textOrder">
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>
                    <S.ButtonContainer>
                      <button onClick={completeOrde}>Concluir</button>
                    </S.ButtonContainer>
                  </>
                )}
              </>
            )}
          </S.CartContanier>
        )}
      </S.Container>
    </>
  )
}
