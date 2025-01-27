import { useParams } from 'react-router'
import { Hero } from '../../components/Hero'
import { Header } from '../../containers/Header'
import { RestaurentMenu } from '../../containers/RestaurentMenuList'
import { useGetRestaurantMenuQuery } from '../../services/api'
import { MoonLoader } from 'react-spinners'
import { colors } from '../../styles'

export const RestaurantPerfil = () => {
  const { id } = useParams()

  const { data: restaurantPerfil } = useGetRestaurantMenuQuery(id!)

  if (restaurantPerfil) {
    return (
      <>
        <Header showRestaurantPerfil={true} />
        {restaurantPerfil && <Hero restaurant={restaurantPerfil} />}
        {restaurantPerfil && (
          <RestaurentMenu cardapio={restaurantPerfil.cardapio} />
        )}
      </>
    )
  }
  return <MoonLoader color={colors.red} className="load" />
}
