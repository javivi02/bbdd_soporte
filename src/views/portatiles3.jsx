import React, { useContext, useEffect, useState } from 'react'
import { TablaPortatiles } from '../components/tablaPortatiles.jsx'
import { getPortatiles } from '../service/portatilesService.js'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'

import ReactPaginate from 'react-paginate'

export const Portatiles3 = ({ props }) => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()

  const navigate = useNavigate()
  const { user: { Usuario, token } } = useContext(LoginContext)
  const [portatiles, setPortatiles] = useState([])
  const [buscar, setBuscar] = useState('')

  const filtroPortatiles = () => {

    if (buscar.length === 0) {
      return portatiles
    }

    return portatiles.filter(portatil => portatil.Portatil.toLowerCase().includes(buscar.toLowerCase()))

  }

  const itemsPerPage = 20
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = filtroPortatiles().slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filtroPortatiles().length / itemsPerPage)

  const handlePageClick = (event) => {
    console.log(event)
    const newOffset = (event.selected * itemsPerPage) % portatiles.length
    console.log(newOffset)
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  useEffect(() => {

    getPortatiles(token)
      .then(setPortatiles)
      .catch(() => {
        console.log('Toquen expirado, redirigir a login')
        navigate('/login', { replace: true })
      })

  }, [itemOffset])

  const handleBuscar = ({ target }) => {
    setBuscar(target.value)
  }

  const handleSelect = () => {
    setItemOffset(0)
  }

  return (

    <>
      <div className={'flex mb-4 p-4 justify-between'}>
        <h1 className="text-4xl font-bold ">{Usuario}<span> - {portatiles.length}</span></h1>
        <input type="text"
               value={buscar}
               // onSelect={handleSelect}
               onChange={handleBuscar}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Buscar ..."/>

      </div>

      <div className="flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel="<"
          className={'flex items-center p-4 gap-3'}
          pageClassName={'bg-blue-500 text-white px-4 py-2 rounded-lg'}
          previousClassName={'bg-blue-500 text-white px-4 py-2 rounded-lg'}
          nextClassName={'bg-blue-500 text-white px-4 py-2 rounded-lg'}
          activeClassName={'bg-blue-500 text-white px-4 py-2 rounded-lg'}
        />

      </div>
      <TablaPortatiles portatiles={currentItems}/>
    </>

  )
}