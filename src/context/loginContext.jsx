import React, { useState } from 'react'

export const LoginContext = React.createContext({})

export const LoginContextProvider = ({ children }) => {

  const [user, setUser] = useState({})

  return <LoginContext.Provider value={{ user, setUser }}>{children}</LoginContext.Provider>
}
