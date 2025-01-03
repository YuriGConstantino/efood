import { RestaurantDishesCard } from '../../components/RestaurantDishesCard'
import Perfil from '../../models/perfil'
import { PerfilesContainer } from './styles'

type Props = {
  perfil: Perfil[]
}

export const RestaurentMenu = ({ perfil }: Props) => (
  <>
    <PerfilesContainer className="container">
      {perfil.map((perfil) => (
        <RestaurantDishesCard
          key={perfil.id}
          name={perfil.name}
          image={perfil.image}
          description={perfil.description}
          buttonText={perfil.buttonText}
        />
      ))}
    </PerfilesContainer>
  </>
)
