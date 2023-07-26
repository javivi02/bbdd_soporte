import React, { useContext, useEffect, useState } from 'react'
import { Tabla } from '../components/tabla.jsx'
import { getPortatiles } from '../service/portatiles.js'
import { LoginContext } from '../context/loginContext.jsx'

export const Portatiles = ({ props }) => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()
  const { user: { Usuario, token } } = useContext(LoginContext)
  const [portatiles, setPortatiles] = useState([])

  useEffect(() => {

    getPortatiles(token)
      .then(setPortatiles)
      .catch(() => console.log('Toquen expirado, redirigir a login'))

  }, [])

  return (

    <>
      <h1 className="text-4xl font-bold">{Usuario}</h1><span></span>

      <Tabla portatiles={portatiles}/>

    </>

  )
}

