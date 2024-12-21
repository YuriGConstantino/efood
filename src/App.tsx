import { createBrowserRouter, RouterProvider } from 'react-router'
import { GlobalStyle } from './styles'

import { Home } from './pages/Home/Home'
import { Footer } from './containers/Footer'
import { RestaurantPerfil } from './pages/RestaurantPerfil/RestaurantPerfil'

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
    path: '/restaurant',
    element: (
      <>
        <RestaurantPerfil />
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
