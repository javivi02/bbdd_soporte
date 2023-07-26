import { useContext, useEffect } from 'react'
import { LoginContext } from '../context/loginContext.jsx'

export const useUser = () => {

  const { user: { Usuario, token }, setUser } = useContext(LoginContext)

  // Utilizo useEffect para bajar la asincronia
  useEffect(() => {
    console.log('cargando credenciales ...')
  }, [])

  return { Usuario, token, setUser }

}