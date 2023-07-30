import React, { useState } from 'react'
import { Modal } from './modal.jsx'
import { useNavigate } from 'react-router-dom'
import { ModalPrestamos } from './modalPrestamos.jsx'

export const TablaPrestamos = ({ prestamos }) => {

  const [showModal, setShowModal] = useState(false)
  const [ID, setID] = useState()

  const handleEdit = (PrestamosID) => {
    setShowModal(true)
    setID(PrestamosID)

  }

  const formatoFecha = (fecha) => {
    if(fecha === null) return undefined
    const fechaArray = fecha.split('T')
    const fechaFormateada = fechaArray[0].split('-')
    return fechaFormateada[2] + '/' + fechaFormateada[1] + '/' + fechaFormateada[0]
  }

  return (
    <>

      <div className="flex flex-col space-y-3 p-3">

        {

          prestamos?.map(({ PrestamosID, PortatilID, Fecha_entrega, Portatil, Fecha_devolucion, Entregado_a, Telefono, Email, Usuario, Nombre, Area, Devolucion_prevista }) => {

            const fechaEntrega = formatoFecha(Fecha_entrega)
            const fechaDevolicionPrevista = formatoFecha(Devolucion_prevista) ?? 'Sin fecha prevista'
            const fechaDevolucion = formatoFecha(Fecha_devolucion) ?? 'Sin devolver'

            return (

              <div key={PrestamosID}
                   className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700">
                <div className="flex space-x-4">
                  <h4 className="mb-2 mr-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{(Portatil)}</h4>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{fechaEntrega}</h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{fechaDevolicionPrevista}</h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{fechaDevolucion}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                  technology
                  acquisitions of 2021 so far, in reverse chronological order.</p>
                <button onClick={() => handleEdit(PrestamosID)}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </button>
              </div>

            )

          })
        }


      </div>

      {
        showModal && <ModalPrestamos setShowModal={setShowModal} PrestamosID={ID}/>
      }

    </>
  )

}