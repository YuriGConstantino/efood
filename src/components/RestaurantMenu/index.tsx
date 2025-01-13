import { useState } from 'react'
import close from '../../assets/images/close 1.png'
import {
  DishButton,
  DishDescription,
  DishesCard,
  DishImage,
  DishName,
  Modal,
  ModalButton,
  ModalClose,
  ModalContainer,
  ModalInfos
} from './styles'
import { Overlay } from '../../styles'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

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

  const priceFormat = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <DishesCard key={id}>
        <DishImage src={foto} alt="Dish" />
        <DishName>{nome}</DishName>
        <DishDescription>{descricao}</DishDescription>
        <DishButton
          onClick={() => setShowModal(true)}
          className="button"
          type="button"
        >
          Mais detalhes
        </DishButton>
      </DishesCard>

      <ModalContainer className={showModal ? 'show' : ''}>
        <Overlay onClick={() => setShowModal(false)} />
        <Modal key={id} className="container">
          <img src={foto} alt="" />
          <ModalInfos>
            <h4>{nome}</h4>
            <ModalClose
              onClick={() => setShowModal(false)}
              src={close}
              alt="Fechar janela"
            />
            <p>{descricao}</p>
            <ModalButton onClick={addCart} type="button" className="button">
              {`Adicionar no carrinho - ${priceFormat(preco)}`}
            </ModalButton>
          </ModalInfos>
        </Modal>
      </ModalContainer>
    </>
  )
}
