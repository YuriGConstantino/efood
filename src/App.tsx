import { createBrowserRouter, RouterProvider } from 'react-router'
import { GlobalStyle } from './styles'

import { Home } from './pages/Home/Home'
import { Footer } from './containers/Footer'
import { RestaurantPerfil as Hiokisushi } from './pages/Hiokisushi/RestaurantPerfil/Hiokisushi'
import { RestaurantPerfil as VitaTrattoria } from './pages/LaDolceVitaTrattoria/RestaurantPerfil/RestaurantPerfil'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    )
  },
  {
    path: '/restaurant/HiokiSushi',
    element: (
      <>
        <Hiokisushi />
      </>
    )
  },
  {
    path: '/restaurant/LaDolceVitaTrattoria',
    element: (
      <>
        <VitaTrattoria />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
