import { RestaurantCard } from '../../components/RestaurantCard'
import * as S from './styles'
import { Restaurants } from '../../pages/Home'

type Props = {
  restaurant: Restaurants[]
}

export const RestaurantList = ({ restaurant }: Props) => {
  return (
    <S.RestaurantContainer>
      <S.List>
        {restaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            imagem={restaurant.capa}
            highlightTag={restaurant.destacado}
            type={restaurant.tipo}
            title={restaurant.titulo}
            rating={restaurant.avaliacao}
            description={restaurant.descricao}
            id={restaurant.id}
          />
        ))}
      </S.List>
    </S.RestaurantContainer>
  )
}
