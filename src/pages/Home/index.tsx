import { RestaurantList } from '../../containers/RestaurantList'

import { Header } from '../../containers/Header'
import { useGetRestaurantsListQuery } from '../../services/api'
import { MoonLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Footer } from '../../containers/Footer'

export const Home = () => {
  const { data: restaurants } = useGetRestaurantsListQuery()

  if (restaurants) {
    return (
      <>
        <Header showRestaurantPerfil={false} />
        <div className="container">
          <RestaurantList restaurant={restaurants} />
        </div>
        <Footer />
      </>
    )
  }
  return <MoonLoader color={colors.red} className="load" />
}
