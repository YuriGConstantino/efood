import { useParams } from 'react-router'
import { Hero } from '../../components/Hero'
import { Header } from '../../containers/Header'
import { RestaurentMenu } from '../../containers/RestaurentMenuList'
import { useGetRestaurantMenuQuery } from '../../services/api'

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
  return <h3>Carregando...</h3>
}
