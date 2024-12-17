import { createBrowserRouter, RouterProvider } from 'react-router'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { GlobalStyle } from './styles'
import { ProdutcList } from './components/ProductList'
import Restaurant from './models/restaurant'

import HiokiSushi from './assets/images/Hioki_Sushi.png'
import VitaTrattoria from './assets/images/La_Dolce_Vita_Trattoria.png'
import { Footer } from './components/Footer'

const restaurants: Restaurant[] = [
  {
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
    image: VitaTrattoria,
    categoryTag: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2,
    highlightTag: ''
  },
  {
    image: VitaTrattoria,
    categoryTag: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3,
    highlightTag: ''
  },
  {
    image: VitaTrattoria,
    categoryTag: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4,
    highlightTag: ''
  },
  {
    image: VitaTrattoria,
    categoryTag: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 5,
    highlightTag: ''
  },
  {
    image: VitaTrattoria,
    categoryTag: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 6,
    highlightTag: ''
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProdutcList restaurant={restaurants} />
        <Footer />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
