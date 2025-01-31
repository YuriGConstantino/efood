import * as S from './styles'

type Props = {
  restaurant: Restaurants
}

export const Hero = ({ restaurant }: Props) => (
  <S.RestaurantMenuBanner
    style={{ backgroundImage: `url(${restaurant.capa})` }}
  >
    <div>
      <div className="container">
        <p>{restaurant.tipo}</p>
        <h2>{restaurant.titulo}</h2>
      </div>
    </div>
  </S.RestaurantMenuBanner>
)
