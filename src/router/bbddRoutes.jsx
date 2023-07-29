import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/dashboard.jsx'
import { NavBar } from '../components/navBar.jsx'
import { Prestamos } from '../views/prestamos.jsx'
import { Portatiles2 } from '../views/portatiles2.jsx'

export const BbddRoutes = () => {

  return (
    <>

      <NavBar/>

      <Routes>
        <Route path="/*" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/portatiles2" element={<Portatiles2/>}/>
        <Route path="/prestamos" element={<Prestamos/>}/>
      </Routes>

    </>
  )
}
