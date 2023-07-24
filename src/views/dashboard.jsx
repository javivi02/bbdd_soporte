import React, { useContext, useEffect, useState } from 'react'
import { getPortatiles } from '../service/portatiles.js'
import { Tabla } from '../components/tabla.jsx'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {

  const { user, setUser } = useContext(LoginContext)
  const navigate = useNavigate()
  const { Usuario } = user

  const [portatiles, setPortatiles] = useState([])

  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('user')

    if (loggedUserJSON) {
      const userStorage = JSON.parse(loggedUserJSON)
      const { token } = userStorage
      getPortatiles(token).then(setPortatiles)
      setUser(user)
    }

  }, [])

  console.log("Cargando Dashboard")

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser({})
    navigate('/login', { replace: true })

  }

  return (
    <>
      <div className="flex flex-col h-screen items-center pt-4">
        <h1 className="text-4xl font-bold">BBDD SOPORTE</h1><span>{Usuario}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>

        <Tabla portatiles={portatiles}/>
      </div>
    </>
  )
}
