import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export const Dashboard = () => {

  const { Usuario, token } = useLocalStorage('user', {})
  const navigate = useNavigate()

  console.log('Cargando Dashboard')

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login', { replace: true })

  }

  return (
    <>
      <div className="flex flex-col h-screen items-center pt-4">
        <h1 className="text-4xl font-bold">BBDD SOPORTE</h1><span></span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}>Logout
        </button>

        <Link to={'/portatiles'}>Portatiles</Link>


      </div>
    </>
  )
}
