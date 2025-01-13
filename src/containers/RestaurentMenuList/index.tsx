import { RestaurantDishesCard } from '../../components/RestaurantMenu'
import { Cardapio } from '../../pages/Home'
import { PerfilesContainer } from './styles'

type Props = {
  cardapio: Cardapio[]
}

export const RestaurentMenu = ({ cardapio }: Props) => {
  return (
    <>
      <PerfilesContainer className="container">
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
      </PerfilesContainer>
    </>
  )
}
