import React, { useEffect, useState } from 'react'
import { Tabla } from '../components/tabla.jsx'
import { getPortatiles } from '../service/portatiles.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export const Portatiles = ({ props }) => {
  const { Usuario, token } = useLocalStorage('user', {})
  const [portatiles, setPortatiles] = useState([])

  useEffect(() => {

    getPortatiles(token).then(setPortatiles)

  }, [])

  return (

    <>
      <h1 className="text-4xl font-bold">{Usuario}</h1><span></span>

      <Tabla portatiles={portatiles}/>

    </>

  )
}

