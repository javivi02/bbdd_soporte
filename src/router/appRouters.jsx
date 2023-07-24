import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../views/login.jsx'
import { LoginContextProvider } from '../context/loginContext.jsx'
import { PrivateRoute } from './privateRoute.jsx'
import { BbddRoutes } from './bbddRoutes.jsx'


export const AppRouters = () => {

  return (
    <>

      <BrowserRouter>

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