import { useContext, useEffect, useState } from 'react'
import { getPortatilesStock } from '../service/portatilesStockService.js'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'
import { getPrestamo } from '../service/prestamoService.js'
import { Loading } from './loading.jsx'
import { HeadBodyGrid } from './skeleton.jsx'

export const ModalPrestamos = ({ setShowModal, PrestamosID, editar }) => {

  const navigate = useNavigate()
  const { user: { token } } = useContext(LoginContext)

  const [portatilesStock, setPortatilesStock] = useState([{ PortatilID: null, Portatil: 'Seleccione un equipamiento' }])
  const [prestamo, setPrestamo] = useState({})
  const [loading, setLoading] = useState(true)

  console.log(prestamo)

  const {
    Entregado_a,
    Portatil,
    PortatilID,
    Observaciones,
    Alimentacion,
    Nombre,
    Motivo,
    Email,
    Devolucion_prevista,
    Fecha_entrega,
    Fecha_devolucion
  } = prestamo

  useEffect(() => {

    if (editar) {

      getPrestamo(token, PrestamosID)
        .then((data) => {
          setPrestamo(data)
          setLoading(false)
        })
        .catch(() => {
          console.log('Toquen expirado, redirigir a login')
          navigate('/login', { replace: true })
        })

    } else {

      getPortatilesStock(token)
        .then((data) => {
          setPortatilesStock([...portatilesStock, ...data])
          setLoading(false)
        })
        .catch(() => {
          console.log('Toquen expirado, redirigir a login')
          navigate('/login', { replace: true })
        })
    }

  }, [])

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const fields = new window.FormData(e.target)
    const data = Object.fromEntries(fields)
    console.log(data)
  }

  const formatoFecha = (fecha) => {
    if (fecha === undefined || fecha === null) return undefined
    const fechaArray = fecha.split('T')
    const fechaFormateada = fechaArray[0].split('-')
    return fechaFormateada[0] + '-' + fechaFormateada[1] + '-' + fechaFormateada[2]
  }

  const devolucion_prevista = formatoFecha(Devolucion_prevista) ?? ''
  const fecha_entrega = formatoFecha(Fecha_entrega) ?? ''
  const fecha_devolucion = formatoFecha(Fecha_devolucion) ?? ''

  if (loading) return <Loading/>

  return (

    <>
      <div
        className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm`}>
        <div className="relative w-full max-w-2xl max-h-full">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">

            <div className="items-start p-4 border-b-4 rounded-t dark:border-blue-500">
              <div className="flex items-center justify-between text-gray-900 dark:text-white">
                <h3 className={'text-3xl font-bold tracking-tight'}>
                  {editar ? 'Editar equipamiento ' + Portatil : 'Añadir nuevo préstamo'}
                </h3>

                {
                  !editar &&
                  <div>
                    <select
                      disabled={editar}
                      name="Equipamiento"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      {
                        portatilesStock?.map(({ PortatilID, Portatil }) =>
                          <option key={PortatilID} value={PortatilID}>{Portatil} </option>
                        )
                      }
                    </select>
                  </div>
                }

              </div>
            </div>

            <div className="px-4 mx-auto max-w-2xl mt-8">
              <form action="#" onSubmit={handelSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                  <div>
                    <label htmlFor="Fecha_entrega"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Fecha de entrega
                    </label>
                    <input type="date" name="Fecha_entrega" id="item-weight"
                           defaultValue={fecha_entrega}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>


                  <div className="w-full">
                    <label htmlFor="Entregado_a"
                           className="block mb-2  font-medium text-gray-900 dark:text-white">Entregado a </label>
                    <input type="text"
                           name="Entregado_a"
                           id="price"
                           defaultValue={Entregado_a ?? ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>
                  <div>
                    <label htmlFor="Devolucion_prevista"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Devolución Prevista
                    </label>
                    <input type="date"
                           name="Devolucion_prevista"
                           defaultValue={devolucion_prevista}
                           id="item-weight"
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">Product
                      Name</label>
                    <input type="text" name="name" id="name"
                           className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           placeholder="Type product name" required=""/>
                  </div>


                  <div className="sm:col-span-2 mb-4">
                    <label htmlFor="Observaciones"
                           className="block mb-2  font-medium text-gray-900 dark:text-white">Observaciones</label>
                    <textarea id="description" rows="8"
                              name={'Observaciones'}
                              className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500
                              focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                              dark:focus:border-primary-500"
                              placeholder="Your description here"></textarea>
                  </div>
                </div>

                <div
                  className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="submit"
                    data-modal-hide="defaultModal"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5
                py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {editar ? 'Actualizar' : 'Guardar'}
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    data-modal-hide="defaultModal" type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200
                 font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white
                dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}