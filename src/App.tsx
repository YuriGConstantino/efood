import { createBrowserRouter, RouterProvider } from 'react-router'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { GlobalStyle } from './styles'
import { ProdutcList } from './components/ProductList'
import Restaurant from './models/restaurant'

import sushi from './assets/images/Hioki_Sushi.png'

const restaurants: Restaurant[] = [
  {
    image: sushi,
    categoryTag: 'Japonesa',
    title: 'sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    highlightTag: 'Destaque da Semana'
  },
  {
    image: sushi,
    categoryTag: 'Japonesa',
    title: 'sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    image: sushi,
    categoryTag: 'Japonesa',
    title: 'sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    image: sushi,
    categoryTag: 'Japonesa',
    title: 'sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    image: sushi,
    categoryTag: 'Japonesa',
    title: 'sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProdutcList restaurant={restaurants} />
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
