import { Copiar, Editar, Ver } from '../utils/iconos.jsx'
import React from 'react'

export const TablaEstacionesTrabajo = ({ estacionesTrabajo, showModal, setShowModal, editar, setEditar }) => {

  return (

    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3 w-24">
            </th>
            <th className="px-4 py-3 w-3">
              <input
                className="w-3 h-3"
                type="checkbox"/>
            </th>

            <th scope="col" className="px-4 py-3 w-64 text-base">
              Nombre
            </th>
          </tr>
          </thead>
          <tbody>

          {
            estacionesTrabajo?.map(({ Identificacion, Estaciones_trabajoID }) => {
              return (
                <tr key={Estaciones_trabajoID}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">


                  <td className="py-4 flex gap-2 w-24 ml-2">

                    <button
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <Ver/>
                    </button>

                    <button
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <Editar/>
                    </button>

                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <Copiar/>
                    </button>

                  </td>

                  <td className="px-4 py-4 w-1">
                    <input
                      className=""
                      type="checkbox"/>
                  </td>

                  <td scope="row"
                      className="px-4 py-4 w-64 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {Identificacion}
                  </td>

                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>




    </>

  )

}