import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/loginContext.jsx'


export const Dashboard = () => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()
  const { user: { Usuario, token }, setUser } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/login', { replace: true })

  }

  return (
    <>
      <div className="flex items-center pt-4 space-x-6 p-4">

        <div className="hover:transition hover:scale-105">
          <Link to={'/portatiles2'} href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PORTATILES</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Link>
        </div>

        <div className="hover:transition hover:scale-105">
          <Link to={'/prestamos'} href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PRÉSTAMOS</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Link>
        </div>


      </div>
    </>
  )
}
