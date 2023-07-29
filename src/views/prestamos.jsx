import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/loading.jsx'
import { getPrestamos } from '../service/prestamos.js'
import { TablaPrestamos } from '../components/tablaPrestamos.jsx'

export const Prestamos = ({ props }) => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()

  const navigate = useNavigate()
  const { user: { Usuario, token } } = useContext(LoginContext)
  const [prestamos, setPrestamos] = useState([])
  const [loading, setLoading] = useState(true)

  //const { data, loading, error } = useFetch('http://localhost:3333/api/prestamos', token)

  useEffect(() => {

    getPrestamos(token)
      .then((data) => {
        setPrestamos(data)
        setLoading(false)

      })
      .catch(() => {
        console.log('Toquen expirado, redirigir a login')
        navigate('/login', { replace: true })
      })

  }, [])

  const filtroPortatiles = () => {

    if (buscar.length === 0) {
      return prestamos
    }

    return prestamos.filter(portatil => portatil.Portatil.toLowerCase().includes(buscar.toLowerCase()))

  }

  const [buscar, setBuscar] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const recordPage = 4
  const lastIndex = currentPage * recordPage
  const firsIndex = lastIndex - recordPage
  const records = filtroPortatiles().slice(firsIndex, lastIndex)
  const npage = Math.ceil(filtroPortatiles().length / recordPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const handleBuscar = ({ target }) => {
    setCurrentPage(1)
    setBuscar(target.value)
  }

  const paginaSiguiente = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const paginaAnterior = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const pagina = (id) => {
    setCurrentPage(id)
  }

  const primeraPagina = () => {
    setCurrentPage(1)
  }

  const ultimaPagina = () => {
    setCurrentPage(npage)
  }

  if (loading) return <Loading/>

  return (

    <>
      <div className={'flex mb-4 p-4 justify-between'}>
        <h1 className="text-4xl font-bold ">{Usuario}<span> - {prestamos.length}</span></h1>
        <input type="text"
               value={buscar}
               onChange={handleBuscar}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Buscar ..."/>

      </div>

      <TablaPrestamos prestamos={records}/>

      <div className="flex justify-end">

        <ul className="flex items-center -space-x-px h-10 text-base p-4">

          <li>

            <div className="mr-8 font-semibold">
              Página {currentPage} de {npage}
            </div>

          </li>

          <li>
            <button onClick={primeraPagina}
                    className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 1 1 5l4 4"/>
              </svg>

              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 1 1 5l4 4"/>
              </svg>
            </button>
          </li>


          <li>
            <button onClick={paginaAnterior}
                    className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 1 1 5l4 4"/>
              </svg>
            </button>
          </li>

          {/*{*/}
          {/*  numbers.map((e, i) => {*/}

          {/*    return (*/}
          {/*      <button key={i}*/}
          {/*              onClick={() => pagina(e)}*/}
          {/*              className={`${currentPage === e ? 'flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>*/}
          {/*        {i + 1}*/}
          {/*      </button>*/}
          {/*    )*/}
          {/*  })*/}
          {/*}*/}

          <li>
            <button onClick={paginaSiguiente}
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
              </svg>
            </button>
          </li>

          <li>
            <button onClick={ultimaPagina}
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
              </svg>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
              </svg>
            </button>
          </li>


        </ul>
      </div>


    </>

  )
}

