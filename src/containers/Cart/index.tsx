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
    onSubmit: (values) => {
      console.log(values)
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
      CardNumber: Yup.number().min(16, 'A').required('O campo é obrigatorio'),
      CardCVV: Yup.number().min(3, 'A').required('O campo é obrigatorio'),
      CardExpirationMonth: Yup.number()
        .min(2, 'Coloque o mês de vencimento do cartão')
        .required('O campo é obrigatorio'),
      CardExpirationYear: Yup.number()
        .min(2, 'Coloque o ano de vencimento do cartão')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (value) => {
      setCompleteOrder(true)
      console.log(value)
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

  const completeOrde = () => {
    closeCart()
    setGoCheckout(false)
    setGoPayment(false)
    setCompleteOrder(false)
  }

  return (
    <>
      <S.Container className={isOpen ? 'showCart' : ''}>
        <Overlay onClick={closeCart} />
        {!goCheckout ? (
          <S.CartContanier>
            {items.length >= 1 ? (
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
            ) : (
              <p>O carrinho está vazio</p>
            )}
            <p>
              Valor total <span>{priceFormat(getTotalPrice())}</span>
            </p>
            <button onClick={() => setGoCheckout(true)}>
              Continuar com a entrega
            </button>
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
                    getError={getErrorMessageformCheckout(
                      'WhoReceiver',
                      formCheckout.errors.WhoReceiver
                    )}
                  />
                  <Field
                    htmlForm="Address"
                    label="Endereço"
                    type="text"
                    name="Address"
                    value={formCheckout.values.Address}
                    onChange={formCheckout.handleChange}
                    getError={getErrorMessageformCheckout(
                      'Address',
                      formCheckout.errors.Address
                    )}
                  />
                  <Field
                    htmlForm="City"
                    label="Cidade"
                    type="text"
                    name="City"
                    value={formCheckout.values.City}
                    onChange={formCheckout.handleChange}
                    getError={getErrorMessageformCheckout(
                      'City',
                      formCheckout.errors.City
                    )}
                  />
                  <Field
                    inputwidth="155px"
                    htmlForm="CEP"
                    label="CEP"
                    type="text"
                    name="CEP"
                    value={formCheckout.values.CEP}
                    onChange={formCheckout.handleChange}
                    getError={getErrorMessageformCheckout(
                      'CEP',
                      formCheckout.errors.CEP
                    )}
                  />
                  <Field
                    inputwidth="155px"
                    htmlForm="Number"
                    label="Número"
                    type="number"
                    name="Number"
                    value={formCheckout.values.Number}
                    onChange={formCheckout.handleChange}
                    getError={getErrorMessageformCheckout(
                      'Number',
                      formCheckout.errors.Number
                    )}
                  />
                  <Field
                    htmlForm="Complement"
                    label="Complemento (opcional)"
                    type="text"
                    name="Complement"
                    value={formCheckout.values.Complement}
                    onChange={formCheckout.handleChange}
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
                        getError={getErrorMessageformPayment(
                          'CardHolder',
                          formPayment.errors.CardHolder
                        )}
                      />
                      <Field
                        inputwidth="228px"
                        htmlForm="CardNumber"
                        label="Número do cartão"
                        type="text"
                        name="CardNumber"
                        value={formPayment.values.CardNumber}
                        onChange={formPayment.handleChange}
                        getError={getErrorMessageformPayment(
                          'CardNumber',
                          formPayment.errors.CardNumber
                        )}
                      />
                      <Field
                        inputwidth="87px"
                        htmlForm="CardCVV"
                        label="CVV"
                        type="number"
                        name="CardCVV"
                        value={formPayment.values.CardCVV}
                        onChange={formPayment.handleChange}
                        getError={getErrorMessageformPayment(
                          'CardCVV',
                          formPayment.errors.CardCVV
                        )}
                      />
                      <Field
                        inputwidth="155px"
                        htmlForm="CardExpirationMonth"
                        label="Mês de vencimento"
                        type="number"
                        name="CardExpirationMonth"
                        value={formPayment.values.CardExpirationMonth}
                        onChange={formPayment.handleChange}
                        getError={getErrorMessageformPayment(
                          'CardExpirationMonth',
                          formPayment.errors.CardExpirationMonth
                        )}
                      />
                      <Field
                        inputwidth="155px"
                        htmlForm="CardExpirationYear"
                        label="Ano de vencimento"
                        type="number"
                        name="CardExpirationYear"
                        value={formPayment.values.CardExpirationYear}
                        onChange={formPayment.handleChange}
                        getError={getErrorMessageformPayment(
                          'CardExpirationYear',
                          formPayment.errors.CardExpirationYear
                        )}
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
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido. Gostaríamos de ressaltar que nossos
                      entregadores não estão autorizados a realizar cobranças
                      extras. Lembre-se da importância de higienizar as mãos
                      após o recebimento do pedido, garantindo assim sua
                      segurança e bem-estar durante a refeição. Esperamos que
                      desfrute de uma deliciosa e agradável experiência
                      gastronômica. Bom apetite!
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
