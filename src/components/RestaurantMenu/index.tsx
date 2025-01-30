import { useState } from 'react'
import { useDispatch } from 'react-redux'
import close from '../../assets/images/close1.png'
import * as S from './styles'
import { Overlay } from '../../styles'
import { add } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  descricao: string
  foto: string
  id: number
  nome: string
  preco: number
  porcao: string
}

export const RestaurantDishesCard = ({
  descricao,
  foto,
  id,
  nome,
  preco,
  porcao
}: Props) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const addCart = () => {
    const item = { descricao, foto, id, nome, preco, porcao }
    dispatch(add(item))
  }

  const addCardAndCloseModal = () => {
    addCart()
    setShowModal(false)
  }

  return (
    <>
      <S.DishesCard key={id}>
        <S.DishImage src={foto} alt="Dish" />
        <S.DishName>{nome}</S.DishName>
        <S.DishDescription>{descricao}</S.DishDescription>
        <S.DishButton
          onClick={() => setShowModal(true)}
          className="button"
          type="button"
        >
          Mais detalhes
        </S.DishButton>
      </S.DishesCard>

      <S.ModalContainer className={showModal ? 'show' : ''}>
        <Overlay onClick={() => setShowModal(false)} />
        <S.Modal key={id} className="container">
          <img src={foto} alt="" />
          <S.ModalInfos>
            <h4>{nome}</h4>
            <S.ModalClose
              onClick={() => setShowModal(false)}
              src={close}
              alt="Fechar janela"
            />
            <p>{descricao}</p>
            <S.ModalButton
              onClick={addCardAndCloseModal}
              type="button"
              className="button"
            >
              {`Adicionar no carrinho - ${parseToBrl(preco)}`}
            </S.ModalButton>
          </S.ModalInfos>
        </S.Modal>
      </S.ModalContainer>
    </>
  )
}
