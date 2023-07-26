import React, { useEffect, useState } from 'react'

export const LoginContext = React.createContext({})

const initialState = JSON.parse(localStorage.getItem('user')) ?? {}

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState)

  // Cargar el usuario del localStorage segun cargue la página si no lo hago así puede tener problemas con la asincronía
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  return <LoginContext.Provider value={{ user, setUser }}>{children}</LoginContext.Provider>
}
