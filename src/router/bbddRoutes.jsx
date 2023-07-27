import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/dashboard.jsx'
import { Portatiles } from '../views/portatiles.jsx'
import { Portatiles2 } from '../views/portatiles2.jsx'

export const BbddRoutes = () => {

  return (
    <>

      <Routes>
        <Route path="/*" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/portatiles" element={<Portatiles/>}/>
        <Route path="/portatiles2" element={<Portatiles2/>}/>
      </Routes>

    </>
  )
}
