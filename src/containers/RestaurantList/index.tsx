import { RestaurantCard } from '../../components/RestaurantCard'
import { RestaurantContainer, List } from './styles'
import { Restaurants } from '../../pages/Home'

type Props = {
  restaurant: Restaurants[]
}

export const RestaurantList = ({ restaurant }: Props) => {
  return (
    <RestaurantContainer>
      <List>
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
      </List>
    </RestaurantContainer>
  )
}
