import { Restaurants } from '../../pages/Home'
import { RestaurantMenuBanner } from './styles'

type Props = {
  restaurant: Restaurants
}

export const Hero = ({ restaurant }: Props) => (
  <RestaurantMenuBanner style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div>
      <div className="container">
        <p>{restaurant.tipo}</p>
        <h2>{restaurant.titulo}</h2>
      </div>
    </div>
  </RestaurantMenuBanner>
)
