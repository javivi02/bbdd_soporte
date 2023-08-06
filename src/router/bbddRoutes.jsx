import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/dashboard.jsx'
import { NavBar } from '../components/navBar.jsx'
import { Prestamos } from '../views/prestamos.jsx'
import { Portatiles } from '../views/portatiles.jsx'
import { PortatilesStock } from '../views/portatilesStock.jsx'
import { ModalPrestamos } from '../components/modalPrestamos.jsx'
import { EstacionesTrabajo } from '../views/estacionesTrabajo.jsx'

export const BbddRoutes = () => {

  return (
    <>

      <NavBar/>

      <Routes>
        <Route path="/*" element={<Navigate to="/dashboard"/>}/>

        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/portatiles" element={<Portatiles/>}/>
        <Route path="/estacionesTrabajo" element={<EstacionesTrabajo/>}/>
        <Route path="/prestamos" element={<Prestamos/>}/>
        <Route path="/portatilesStock" element={<PortatilesStock/>}/>
        <Route path="/modal" element={<ModalPrestamos/>}/>
      </Routes>

    </>
  )
}
