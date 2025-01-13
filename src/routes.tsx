import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { RestaurantPerfil } from './pages/RestaurantPerfil'

export const RoutePath = () => {
  const id = 0

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={'/restaurantes/:id'} element={<RestaurantPerfil />} />
    </Routes>
  )
}
