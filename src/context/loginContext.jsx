import React, { useState } from 'react'

export const LoginContext = React.createContext({})

export const LoginContextProvider = ({ children }) => {

  const [user, setUser] = useState({
    login: false,
  })

  return <LoginContext.Provider value={{ user, setUser }}>{children}</LoginContext.Provider>
}
