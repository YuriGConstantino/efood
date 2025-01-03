import { Header } from '../../../containers/Header'
import { RestaurentMenu } from '../../../containers/RestaurentMenu'
import { Hero } from '../../../components/Hero'

import dishImage from '../../../assets/images/Pizza_Maquerita.png'
import restaurantImage from '../../../assets/images/La_Dolce_Vita_Trattoria.png'

const Perfil = {
  title: 'La Dolce Vita Trattoria',
  type: 'Italiana',
  hero: restaurantImage
}

const Dishes = [
  {
    image: dishImage,
    name: 'Pizza Maquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    buttonText: 'Adicionar ao carrinho',
    id: 25
  },
  {
    image: dishImage,
    name: 'Pizza Maquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    buttonText: 'Adicionar ao carrinho',
    id: 24
  },
  {
    image: dishImage,
    name: 'Pizza Maquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    buttonText: 'Adicionar ao carrinho',
    id: 79
  },
  {
    image: dishImage,
    name: 'Pizza Maquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    buttonText: 'Adicionar ao carrinho',
    id: 8
  },
  {
    image: dishImage,
    name: 'Pizza Maquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    buttonText: 'Adicionar ao carrinho',
    id: 5
  },
  {
    image: dishImage,
    name: 'Pizza Maquerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    buttonText: 'Adicionar ao carrinho',
    id: 58
  }
]

export const RestaurantPerfil = () => (
  <>
    <Header showRestaurantPerfil={true} />
    <Hero type={Perfil.type} title={Perfil.title} image={Perfil.hero} />
    <RestaurentMenu perfil={Dishes} />
  </>
)
