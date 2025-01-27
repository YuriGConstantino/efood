import { RestaurantList } from '../../containers/RestaurantList'

import { Header } from '../../containers/Header'
import { useGetRestaurantsListQuery } from '../../services/api'
import { MoonLoader } from 'react-spinners'
import { colors } from '../../styles'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const Home = () => {
  const { data: restaurants } = useGetRestaurantsListQuery()

  if (restaurants) {
    return (
      <>
        <Header showRestaurantPerfil={false} />
        <div className="container">
          <RestaurantList restaurant={restaurants} />
        </div>
      </>
    )
  }
  return <MoonLoader color={colors.red} className="load" />
}
