import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Overlay } from '../../styles'
import { close, remove } from '../../store/reducers/cart'
import { Field } from '../../components/InputField'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../../utils'
import trash from '../../assets/images/close2.png'
import * as S from './styled'

export const Cart = () => {
  const [goCheckout, setGoCheckout] = useState(false)
  const [goPayment, setGoPayment] = useState(false)
  const [completeOrder, setCompleteOrder] = useState(false)
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeCart = (id: number) => {
    dispatch(remove(id))
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
      ZipCode: '',
      Number: '',
      Complement: '',
      CardHolder: '',
      CardNumber: '',
      CardCVV: '',
      CardExpirationMonth: '',
      CardExpirationYear: ''
    },
    validationSchema: Yup.object({
      WhoReceiver: Yup.string()
        .min(5, 'O nome teve ter mais de 5 caractéres')
        .required('O campo é obrigatorio'),
      Address: Yup.string()
        .min(5, 'O nome teve ter mais de 5 caractéres')
        .required('O campo é obrigatorio'),
      City: Yup.string().required('O campo é obrigatorio'),
      ZipCode: Yup.string().required('O campo é obrigatorio'),
      Number: Yup.number().required('O campo é obrigatorio'),
      Complement: Yup.string(),
      CardHolder: Yup.string().required('O campo é obrigatorio'),
      CardNumber: Yup.string().min(16, '').required('O campo é obrigatorio'),
      CardCVV: Yup.number().min(3, '').required('O campo é obrigatorio'),
      CardExpirationMonth: Yup.number()
        .min(2, '')
        .required('O campo é obrigatorio'),
      CardExpirationYear: Yup.number()
        .min(2, '')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      setCompleteOrder(true)
      purchase({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: values.WhoReceiver,
          address: {
            description: values.Address,
            city: values.City,
            zipCode: values.ZipCode,
            number: Number(values.Number),
            complement: values.Complement
          }
        },
        payment: {
          card: {
            name: values.CardHolder,
            number: values.CardNumber,
            code: Number(values.CardCVV),
            expires: {
              month: Number(values.CardExpirationMonth),
              year: Number(values.CardExpirationYear)
            }
          }
        }
      })
    }
  })

  const getInputErrors = (fieldName: string, mensage?: string) => {
    const isTouched = fieldName in formCheckout.touched
    const isInvalid = fieldName in formCheckout.errors

    if (isTouched && isInvalid) return mensage
    return ''
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
                        {items.nome} <span>{parseToBrl(items.preco)}</span>
                      </p>
                      <S.RemoveBtn onClick={() => removeCart(items.id)}>
                        <img src={trash} alt="Remover do carrinho" />
                      </S.RemoveBtn>
                    </S.ItemCard>
                  ))}
                </ul>
                <p>
                  Valor total <span>{parseToBrl(getTotalPrice())}</span>
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
                    mask=""
                    htmlForm="WhoReceiver"
                    label="Quem irá receber"
                    type="text"
                    name="WhoReceiver"
                    value={formCheckout.values.WhoReceiver}
                    onChange={formCheckout.handleChange}
                    errorMensage={getInputErrors(
                      'WhoReceiver',
                      formCheckout.errors.WhoReceiver
                    )}
                  />
                  <Field
                    mask=""
                    htmlForm="Address"
                    label="Endereço"
                    type="text"
                    name="Address"
                    value={formCheckout.values.Address}
                    onChange={formCheckout.handleChange}
                    errorMensage={getInputErrors(
                      'Address',
                      formCheckout.errors.Address
                    )}
                  />
                  <Field
                    mask=""
                    htmlForm="City"
                    label="Cidade"
                    type="text"
                    name="City"
                    value={formCheckout.values.City}
                    onChange={formCheckout.handleChange}
                    errorMensage={getInputErrors(
                      'City',
                      formCheckout.errors.City
                    )}
                  />
                  <Field
                    mask="99999-999"
                    inputwidth="155px"
                    htmlForm="ZipCode"
                    label="CEP"
                    type="text"
                    name="ZipCode"
                    value={formCheckout.values.ZipCode}
                    onChange={formCheckout.handleChange}
                    errorMensage={getInputErrors(
                      'ZipCode',
                      formCheckout.errors.ZipCode
                    )}
                  />
                  <Field
                    mask=""
                    inputwidth="155px"
                    htmlForm="Number"
                    label="Número"
                    type="number"
                    name="Number"
                    value={formCheckout.values.Number}
                    onChange={formCheckout.handleChange}
                    errorMensage={getInputErrors(
                      'Number',
                      formCheckout.errors.Number
                    )}
                  />
                  <Field
                    mask=""
                    htmlForm="Complement"
                    label="Complemento (opcional)"
                    type="text"
                    name="Complement"
                    value={formCheckout.values.Complement}
                    onChange={formCheckout.handleChange}
                  />
                  <S.ButtonContainer>
                    <button onClick={() => setGoPayment(true)}>
                      Continuar com o pagamento
                    </button>
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
                      Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}
                    </h3>
                    <form onSubmit={formCheckout.handleSubmit}>
                      <Field
                        mask=""
                        htmlForm="CardHolder"
                        label="Nome no cartão"
                        type="text"
                        name="CardHolder"
                        value={formCheckout.values.CardHolder}
                        onChange={formCheckout.handleChange}
                        errorMensage={getInputErrors(
                          'CardHolder',
                          formCheckout.errors.CardHolder
                        )}
                      />
                      <Field
                        mask="9999.9999.9999.9999"
                        inputwidth="228px"
                        htmlForm="CardNumber"
                        label="Número do cartão"
                        type="text"
                        name="CardNumber"
                        value={formCheckout.values.CardNumber}
                        onChange={formCheckout.handleChange}
                        errorMensage={getInputErrors(
                          'CardNumber',
                          formCheckout.errors.CardNumber
                        )}
                      />
                      <Field
                        mask=""
                        inputwidth="87px"
                        htmlForm="CardCVV"
                        label="CVV"
                        type="number"
                        name="CardCVV"
                        value={formCheckout.values.CardCVV}
                        onChange={formCheckout.handleChange}
                        errorMensage={getInputErrors(
                          'CardCVV',
                          formCheckout.errors.CardCVV
                        )}
                        min="000"
                      />
                      <Field
                        mask=""
                        inputwidth="155px"
                        htmlForm="CardExpirationMonth"
                        label="Mês de vencimento"
                        type="number"
                        name="CardExpirationMonth"
                        value={formCheckout.values.CardExpirationMonth}
                        onChange={formCheckout.handleChange}
                        errorMensage={getInputErrors(
                          'CardExpirationMonth',
                          formCheckout.errors.CardExpirationMonth
                        )}
                        min="01"
                        max="12"
                      />
                      <Field
                        mask=""
                        inputwidth="155px"
                        htmlForm="CardExpirationYear"
                        label="Ano de vencimento"
                        type="number"
                        name="CardExpirationYear"
                        value={formCheckout.values.CardExpirationYear}
                        onChange={formCheckout.handleChange}
                        errorMensage={getInputErrors(
                          'CardExpirationYear',
                          formCheckout.errors.CardExpirationYear
                        )}
                        min="26"
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
                    <h3>Pedido realizado - {data?.orderId}</h3>
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
                      <button onClick={() => window.location.reload()}>
                        Concluir
                      </button>
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
