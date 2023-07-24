import React, { useContext, useEffect, useState } from 'react'
import { getPortatiles } from '../service/portatiles.js'
import { Tabla } from '../components/tabla.jsx'
import { LoginContext } from '../context/loginContext.jsx'

export const Dashboard = () => {

  const { user, setUser } = useContext(LoginContext)
  const { Usuario, login, token } = user

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


  return (
    <>
      <div className="flex flex-col h-screen items-center pt-4">
        <h1 className="text-4xl font-bold">BBDD SOPORTE</h1><span>{Usuario}</span>

        <Tabla portatiles={portatiles}/>
      </div>
    </>
  )
}
