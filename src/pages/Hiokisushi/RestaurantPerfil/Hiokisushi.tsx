import { Header } from '../../../containers/Header'
import { RestaurentMenu } from '../../../containers/RestaurentMenu'
import { Hero } from '../../../components/Hero'

import dishImage from '../../../assets/images/HiokiSushi.png'
import restaurantImage from '../../../assets/images/HiokiSushi.png'

const Perfil = {
  title: 'Hioki Sushi',
  type: 'Japonesa',
  hero: restaurantImage
}

const Dishes = [
  {
    image: dishImage,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho',
    id: 4
  },
  {
    image: dishImage,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho',
    id: 12
  },
  {
    image: dishImage,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho',
    id: 9
  },
  {
    image: dishImage,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho',
    id: 2
  },
  {
    image: dishImage,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho',
    id: 46
  },
  {
    image: dishImage,
    name: 'Sushi de salmão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente consequuntur eaque nesciunt placeat sequi.',
    buttonText: 'Adicionar ao carrinho',
    id: 37
  }
]

export const RestaurantPerfil = () => (
  <>
    <Header showRestaurantPerfil={true} />
    <Hero type={Perfil.type} title={Perfil.title} image={Perfil.hero} />
    <RestaurentMenu perfil={Dishes} />
  </>
)
