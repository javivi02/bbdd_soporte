import React, { useContext, useEffect, useState } from 'react'
import { Tabla } from '../components/tabla.jsx'
import { getPortatiles } from '../service/portatiles.js'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../components/modal.jsx'

export const Portatiles = ({ props }) => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()

  const { user: { Usuario, token } } = useContext(LoginContext)
  const [portatiles, setPortatiles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    getPortatiles(token)
      .then(setPortatiles)
      .catch(() => {
        console.log('Toquen expirado, redirigir a login')
        navigate('/login', { replace: true })
      })

  }, [])

  return (

    <>
      <h1 className="text-4xl font-bold">{Usuario}</h1><span></span>

      <Tabla portatiles={portatiles}/>

    </>

  )
}

