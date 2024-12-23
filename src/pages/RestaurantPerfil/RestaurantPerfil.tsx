import { Header } from '../../containers/Header'
import { RestaurentMenu } from '../../containers/RestaurentMenu'

export const RestaurantPerfil = () => (
  <>
    <Header showRestaurantPerfil={true} />
    <RestaurentMenu />
  </>
)
