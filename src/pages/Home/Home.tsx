import { RestaurantList } from '../../containers/RestaurantList'
import Restaurant from '../../models/restaurant'

import HiokiSushi from '../../assets/images/HiokiSushi.png'
import VitaTrattoria from '../../assets/images/La_Dolce_Vita_Trattoria.png'
import { Header } from '../../containers/Header'

const restaurants: Restaurant[] = [
  {
    name: 'Hioki Sushi',
    type: 'Japonesa',
    image: HiokiSushi,
    categoryTag: 'Japonesa',
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    highlightTag: 'Destaque da Semana'
  },
  {
    name: 'La Dolce Vita Trattoria',
    type: 'Italiana',
    image: VitaTrattoria,
    categoryTag: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2,
    highlightTag: ''
  }
]
export const Home = () => (
  <>
    <Header showRestaurantPerfil={false} />
    <div className="container">
      <RestaurantList restaurant={restaurants} />
    </div>
  </>
)
