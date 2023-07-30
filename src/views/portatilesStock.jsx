import { useNavigate } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/loginContext.jsx'
import { usePagination } from '../hooks/usePagination.js'
import { Loading } from '../components/loading.jsx'
import { TablaPortatiles } from '../components/tablaPortatiles.jsx'
import { Paginacion } from '../components/paginacion.jsx'
import { getPortatilesStock } from '../service/portatilesStockService.js'

export const PortatilesStock = () => {

  const navigate = useNavigate()
  const { user: { Usuario, token } } = useContext(LoginContext)
  const [portatiles, setPortatiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [buscar, setBuscar] = useState('')

  useEffect(() => {

    getPortatilesStock(token)
      .then((data) => {
        setPortatiles(data)
        setLoading(false)

      })
      .catch(() => {
        console.log('Toquen expirado, redirigir a login')
        navigate('/login', { replace: true })
      })

  }, [])

  const filtro = () => {

    if (buscar.length === 0) return portatiles
    return portatiles.filter(portatil => portatil.Portatil.toLowerCase().includes(buscar.toLowerCase()))

  }

  const { currentPage, setCurrentPage, records, npage } = usePagination(10, filtro())

  const handleBuscar = ({ target }) => {
    setCurrentPage(1)
    setBuscar(target.value)
  }

  if (loading) return <Loading/>

  return (

    <>
      <div className={'flex mb-4 p-4 justify-between'}>
        <h1 className="text-4xl font-bold ">{Usuario}<span> - {portatiles.length}</span></h1>
        <input type="text"
               value={buscar}
               onChange={handleBuscar}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Buscar ..."/>

      </div>

      <TablaPortatiles portatiles={records}/>

      <Paginacion
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        npage={npage}
      />

    </>

  )
}