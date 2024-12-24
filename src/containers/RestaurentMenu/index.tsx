import { Hero } from '../../components/Hero'
import { RestaurantDishesCard } from '../../components/RestaurantDishesCard'
import Perfil from '../../models/perfil'
import { PerfilesContainer } from './styles'

type Props = {
  perfil: Perfil[]
}

export const RestaurentMenu = ({ perfil }: Props) => (
  <>
    {/* <Hero key={perfil[0].id} type={perfil[0].type} title={perfil[0].title} /> */}

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
