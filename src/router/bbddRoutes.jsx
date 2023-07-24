import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/dashboard.jsx'

export const BbddRoutes = () => {

  return (
    <>

      <Routes>
        <Route path="/*" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

    </>
  )
}
