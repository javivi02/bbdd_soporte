import { useEffect, useState } from 'react'
import { checkJWT } from '../service/checkService.js'

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