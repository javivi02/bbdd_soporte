import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/loginContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useOutsideClick } from '../hooks/useOutsideClick.js'
import { Theme } from './theme.jsx'

export const NavBar = () => {

  const { user: { Usuario, token }, setUser } = useContext(LoginContext)
  const navigate = useNavigate()

  const [equipos, setEquipos] = useState(false)
  const ref = useOutsideClick(() => {setEquipos(false)})

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/login', { replace: true })

  }

  const handleEquipos = () => {
    setEquipos(!equipos)
  }


  return(

    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/dashboard"} className="flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/TVE.svg" className="h-12 mr-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-500 dark:text-white">BBDD SOPORTE</span>
        </Link>

        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">DASHBOARD</a>
            </li>

            <li>
              <button ref={ref} onClick={handleEquipos} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className=" relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Equipos <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg></button>

              <div id="dropdownNavbar"

                   className={`absolute my-4 ${equipos ? '': 'hidden'} z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg` +
                     ' shadow w-44 dark:bg-gray-700 dark:divide-gray-600'}>
                <ul className="py-2 text-base text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to={'/portatiles'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Portatiles</Link>
                  </li>
                  <li>
                    <Link to={'/prestamos'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Préstamos</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Departamento</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portatiles</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Otros</a>
            </li>
            <li>
              <Theme />
            </li>
            <li>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleLogout}>Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}


