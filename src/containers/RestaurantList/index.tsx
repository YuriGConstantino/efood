import Restaurant from '../../models/restaurant'
import { RestaurantCard } from '../../components/RestaurantCard'
import { RestaurantContainer, List } from './styles'

type Props = {
  restaurant: Restaurant[]
}

export const RestaurantList = ({ restaurant }: Props) => (
  <RestaurantContainer>
    <List>
      {restaurant.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          imagem={restaurant.image}
          highlightTag={restaurant.highlightTag}
          categoryTag={restaurant.categoryTag}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
        />
      ))}
    </List>
  </RestaurantContainer>
)
