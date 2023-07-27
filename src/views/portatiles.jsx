import React, { useContext, useEffect, useState } from 'react'
import { Tabla } from '../components/tabla.jsx'
import { getPortatiles } from '../service/portatiles.js'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Paginacion } from '../components/paginacion.jsx'

export const Portatiles = ({ props }) => {

  //const { Usuario, token } = useLocalStorage('user', {})
  //const { Usuario, token, setUser } = useUser()

  const navigate = useNavigate()
  const { user: { Usuario, token } } = useContext(LoginContext)

  const [portatiles, setPortatiles] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [buscar, setBuscar] = useState('')
  const [paginacion, setPaginacion] = useState(20)
  const records = filtroPortatiles()

  useEffect(() => {

    getPortatiles(token)
      .then(setPortatiles)
      .catch(() => {
        console.log('Toquen expirado, redirigir a login')
        navigate('/login', { replace: true })
      })

  }, [])

  const filtroPortatiles = () => {

    if (buscar.length === 0) {
      return portatiles.slice(currentPage, currentPage + paginacion)
    }

    const filtro = portatiles.filter(portatil => portatil.Portatil.toLowerCase().includes(buscar.toLowerCase()))
    return filtro.slice(currentPage, currentPage + paginacion)

  }

  const paginaSiguiente = () => {

    if (portatiles.filter(portatil => portatil.Portatil.toLowerCase().includes(buscar.toLowerCase())).length > currentPage + 8) {
      setCurrentPage(currentPage + paginacion)
    }

  }

  const paginaAnterior = () => {

    if (currentPage > 0) {
      setCurrentPage(currentPage - paginacion)
    }

  }

  const handleBuscar = ({ target }) => {
    setBuscar(target.value)
  }

  const numeroPaginas = () => {

    //console.log(filtroPortatiles().length)
    return Math.ceil(portatiles.length / paginacion)
  }

  const portatilPagina = () => {

    const arrayPortatiles = structuredClone(portatiles)
    const arrayPaginacion = []

    for (let i = 0; i < arrayPortatiles.length; i += numeroPaginas()) {
      let pedazo = arrayPortatiles.slice(i, i + numeroPaginas());
      arrayPaginacion.push(pedazo);
    }

    return arrayPaginacion
  }

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

      <Paginacion
        paginaSiguiente={paginaSiguiente}
        paginaAnterior={paginaAnterior}
        paginaActual={currentPage}
        totalPaginas={numeroPaginas()}
        portatilPagina={portatilPagina()}
      />

      <Tabla portatiles={records}/>

    </>

  )
}

