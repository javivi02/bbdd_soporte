import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseCkeckHook } from '../hooks/useCkeckHook.js'

export const PrivateRoute = ({ children }) => {

  //console.log('Por aquí pasaran todas las rutas privadas')

  const loggedUserJSON = window.localStorage.getItem('user')

  if (!loggedUserJSON) return <Navigate to="/login"/>

  const { token } = JSON.parse(loggedUserJSON)
  const respuesta = UseCkeckHook(token)

  return !respuesta
    ? <Navigate to="/login"/>
    : children
}
