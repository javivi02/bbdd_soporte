import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../views/login.jsx'
import { LoginContextProvider } from '../context/loginContext.jsx'
import { PrivateRoute } from './privateRoute.jsx'
import { BbddRoutes } from './bbddRoutes.jsx'
import { Toaster } from 'react-hot-toast'

export const AppRouters = () => {

  return (
    <>

      <BrowserRouter>
        <div><Toaster/></div>

        <LoginContextProvider>

          <Routes>

            <Route path="/login" element={
              <Login/>
            }/>

            <Route path="/*" element={

              <PrivateRoute>
                <BbddRoutes/>
              </PrivateRoute>

            }/>

          </Routes>

        </LoginContextProvider>

      </BrowserRouter>

    </>
  )

}