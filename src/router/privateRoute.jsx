import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

  const loggedUserJSON = window.localStorage.getItem('user')
  return !loggedUserJSON
    ? <Navigate to="/login"/>
    : children
}
