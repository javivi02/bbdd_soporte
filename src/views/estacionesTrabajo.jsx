import React, { useContext, useEffect, useState } from 'react'
import { TablaPortatiles } from '../components/tablaPortatiles.jsx'
import { getPortatiles } from '../service/portatilesService.js'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Paginacion } from '../components/paginacion.jsx'
import { Loading } from '../components/loading.jsx'
import { usePagination } from '../hooks/usePagination.js'
import { getEstacionesTrabajo } from '../service/estacionesTrabajoService.js'
import { TablaEstacionesTrabajo } from '../components/tablaEstacionesTrabajo.jsx'

export const EstacionesTrabajo = ({ props }) => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()

  const navigate = useNavigate()
  const { user: { Usuario, token } } = useContext(LoginContext)
  const [estacionesTrabajo, setEstacionesTrabajo] = useState([])
  const [loading, setLoading] = useState(true)
  const [buscar, setBuscar] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editar, setEditar] = useState(false)

  const [isCheck, setIsCheck] = useState([])
  const [isCheckAll, setIsCheckAll] = useState(false)

  // console.log(estacionesTrabajo)

  useEffect(() => {

    getEstacionesTrabajo(token)
      .then((data) => {
        setEstacionesTrabajo(data)
        setLoading(false)

      })
      .catch(() => {
        console.log('Toquen expirado, redirigir a login')
        navigate('/login', { replace: true })
      })

  }, [showModal])


  const filtro = () => {

    if (buscar.length === 0) return estacionesTrabajo
    return estacionesTrabajo.filter(estacionesTrabajo => estacionesTrabajo.Identificacion.toLowerCase().includes(buscar.toLowerCase()))

  }

  const { currentPage, setCurrentPage, records, npage } = usePagination(10, filtro())

  useEffect(() => {
    setIsCheck([])
    setIsCheckAll(false)
  }, [currentPage])

  const handleBuscar = ({ target }) => {
    setCurrentPage(1)
    setBuscar(target.value)
  }

  const handleNuevo = () => {
    setShowModal(true)
    setEditar(false)
  }

  if (loading) return <Loading/>

  return (

    <>
      <div className={'flex mb-4 p-4 justify-between items-center'}>
        <div>
          <button type="button"
                  onClick={handleNuevo}
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4
                focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg px-5 py-2.5
                text-center mr-2 mb-2 uppercase font-bold">
            Añadir nuevo estación de trabajo
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

      <TablaEstacionesTrabajo
        estacionesTrabajo={records}
        showModal={showModal}
        setShowModal={setShowModal}
        editar={editar}
        setEditar={setEditar}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        isCheckAll={isCheckAll}
        setIsCheckAll={setIsCheckAll}
      />

      <Paginacion
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        npage={npage}
      />

    </>

  )

}

