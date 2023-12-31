import React, { useContext, useEffect, useState } from 'react'
import { TablaPortatiles } from '../components/tablaPortatiles.jsx'
import { getPortatiles } from '../service/portatilesService.js'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Paginacion } from '../components/paginacion.jsx'
import { Loading } from '../components/loading.jsx'
import { usePagination } from '../hooks/usePagination.js'

export const Portatiles = ({ props }) => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()

  const navigate = useNavigate()
  const { user: { Usuario, token } } = useContext(LoginContext)
  const [portatiles, setPortatiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [buscar, setBuscar] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editar, setEditar] = useState(false)

  useEffect(() => {

    getPortatiles(token)
      .then((data) => {
        setPortatiles(data)
        setLoading(false)

      })
      .catch(() => {
        console.log('Toquen expirado, redirigir a login')
        navigate('/login', { replace: true })
      })

  }, [showModal])

  const filtro = () => {

    if (buscar.length === 0) return portatiles
    return portatiles.filter(portatil => portatil.Portatil.toLowerCase().includes(buscar.toLowerCase()))

  }

  const { currentPage, setCurrentPage, records, npage } = usePagination(10, filtro())

  const handleBuscar = ({ target }) => {
    setCurrentPage(1)
    setBuscar(target.value)
  }

  const handleNuevoPrestamo = () => {
    setShowModal(true)
    setEditar(false)
  }

  if (loading) return <Loading/>

  return (

    <>
      <div className={'flex mb-4 p-4 justify-between items-center'}>
        <div>
          <button type="button"
                  onClick={handleNuevoPrestamo}
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg px-5 py-2.5
                text-center mr-2 mb-2 uppercase font-bold">
            Añadir nuevo portatil
          </button>
        </div>
        <div>
          <input type="text"
                 value={buscar}
                 onChange={handleBuscar}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
               block dark:bg-gray-700 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                 placeholder="Buscar ..."/>
        </div>
      </div>

      <TablaPortatiles
        portatiles={records}
        showModal={showModal}
        setShowModal={setShowModal}
        editar={editar}
        setEditar={setEditar}
      />

      <Paginacion
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        npage={npage}
      />

    </>

  )

}

