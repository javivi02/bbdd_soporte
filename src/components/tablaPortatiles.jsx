import React, { useState } from 'react'
import { ModalPortatil } from './modalPortatil.jsx'
import { Copiar, Editar, Ver } from '../utils/iconos.jsx'

export const TablaPortatiles = ({ portatiles, showModal, setShowModal, editar, setEditar }) => {

  const [ID, setID] = useState()

  const handleEdit = (PortatilID) => {
    setShowModal(true)
    setID(PortatilID)
    setEditar(true)

  }

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
              Portatil
            </th>
            <th scope="col" className="px-4 py-3 w-56 text-base">
              Modelo
            </th>
            <th scope="col" className="px-6 py-3 text-base w-64">
              Direccion IP
            </th>
            <th scope="col" className="px-2 py-3 w-3 text-base">
              Pool
            </th>
          </tr>
          </thead>
          <tbody>

          {
            portatiles?.map(({ PortatilID, Portatil, Direccion_ip_torre, Pool, Modelo }) => {
              return (
                <tr key={PortatilID}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">


                  <td className="py-4 flex gap-2 w-24 ml-2">

                    <button
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <Ver/>
                    </button>

                    <button
                      onClick={(() => handleEdit(PortatilID))}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <Editar/>
                    </button>

                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <Copiar/>
                    </button>

                  </td>

                  <td className="px-4 py-4 w-1">
                    <input
                      onChange={() => console.log(PortatilID)}
                      className=""
                      type="checkbox"/>
                  </td>

                  <td scope="row"
                      className="px-4 py-4 w-64 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {Portatil}
                  </td>
                  <td scope="row" className="px-4 py-4 text-base w-40 text-gray-900 whitespace-nowrap dark:text-white ">
                    {Modelo}
                  </td>
                  <td className="px-6 py-4 w-64 text-base">
                    {Direccion_ip_torre}
                  </td>
                  <td className="px-4 py-4 w-3 text-base">
                    <input
                      type="checkbox"
                      disabled={true}
                      defaultChecked={Pool}
                    />
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>

      {
        showModal && <ModalPortatil setShowModal={setShowModal} PortatilID={ID} editar={editar}/>
      }
    </>
  )

}