import { createBrowserRouter, RouterProvider } from 'react-router'
import { Header } from './components/Header'
import { GlobalStyle } from './styles'

import { Home } from './pages/Home'
import { Footer } from './components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
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
