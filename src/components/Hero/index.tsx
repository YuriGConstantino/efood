import { RestaurantMenuBanner } from './styles'

export type Props = {
  type: string
  title: string
  image: string
}

export const Hero = ({ type, title, image }: Props) => (
  <RestaurantMenuBanner style={{ backgroundImage: `url(${image})` }}>
    <div>
      <div className="container">
        <p>{type}</p>
        <h2>{title}</h2>
      </div>
    </div>
  </RestaurantMenuBanner>
)
