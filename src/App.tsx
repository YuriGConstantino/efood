import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { GlobalStyle } from './styles'

import { Footer } from './containers/Footer'
import { RoutePath } from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutePath />
      </BrowserRouter>
    </Provider>
  )
}

export default App
