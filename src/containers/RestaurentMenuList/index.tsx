import { RestaurantDishesCard } from '../../components/RestaurantMenu'
import * as S from './styles'

type Props = {
  cardapio: Cardapio[]
}

export const RestaurentMenu = ({ cardapio }: Props) => {
  return (
    <>
      <S.PerfilesContainer className="container">
        {cardapio.map((cardapio) => (
          <RestaurantDishesCard
            key={cardapio.id}
            nome={cardapio.nome}
            foto={cardapio.foto}
            descricao={cardapio.descricao}
            id={cardapio.id}
            preco={cardapio.preco}
            porcao={cardapio.porcao}
          />
        ))}
      </S.PerfilesContainer>
    </>
  )
}
