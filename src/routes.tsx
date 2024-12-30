import { Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'
import { RestaurantPerfil as Hiokisushi } from './pages/Hiokisushi/RestaurantPerfil/Hiokisushi'
import { RestaurantPerfil as VitaTrattoria } from './pages/LaDolceVitaTrattoria/RestaurantPerfil/LaDolceVitaTrattoria'

export const RoutePath = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/HiokiSushi" element={<Hiokisushi />} />
    <Route
      path="/restaurant/LaDolceVitaTrattoria"
      element={<VitaTrattoria />}
    />
  </Routes>
)
