import { BrowserRouter } from 'react-router'
import { GlobalStyle } from './styles'

import { Footer } from './containers/Footer'
import { RoutePath } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutePath />
      <Footer />
    </BrowserRouter>
  )
}

export default App
