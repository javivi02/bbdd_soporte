import { useEffect, useState } from 'react'
import { checkJWT } from '../service/check.js'

export const UseCkeckHook = (token) => {

  const [bandera, setBandera] = useState(true)

  useEffect(() => {
    checkJWT(token)
      .then((res) => {
        res === 'Usuario con token correcto'
          ? setBandera(true)
          : setBandera(false)
      })
  }, [])

  return bandera

}