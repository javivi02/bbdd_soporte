import React, { useContext, useEffect, useState } from 'react'
import { Tabla } from '../components/tabla.jsx'
import { LoginContext } from '../context/loginContext.jsx'
import { getPortatiles } from '../service/portatiles.js'

export const Portatiles = ({ props }) => {

  const { user, setUser } = useContext(LoginContext)
  const { token } = user
  const [portatiles, setPortatiles] = useState([])

  useEffect(() => {

    getPortatiles(token).then(setPortatiles)
  }, [])

    return(

        <>

          <Tabla portatiles={portatiles}/>

        </>

    );
}

