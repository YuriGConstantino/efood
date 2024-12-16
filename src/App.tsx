import { createBrowserRouter, RouterProvider } from 'react-router'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { GlobalStyle } from './styles'
import { ProdutcList } from './components/ProductList'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
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
