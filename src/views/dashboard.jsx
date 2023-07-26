import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/loginContext.jsx'


export const Dashboard = () => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()
  const { user: { Usuario, token }, setUser } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/login', { replace: true })

  }

  return (
    <>
      <div className="flex flex-col h-screen items-center pt-4">
        <h1 className="text-4xl font-bold">BBDD SOPORTE</h1><span></span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}>Logout
        </button>

        <Link to={'/portatiles'}>Portatiles</Link>


      </div>
    </>
  )
}
