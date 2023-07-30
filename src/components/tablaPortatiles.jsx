import React, { useState } from 'react'
import { Modal } from './modal.jsx'

export const TablaPortatiles = ({ portatiles }) => {

  const [showModal, setShowModal] = useState(false)
  const [ID, setID] = useState()

  const handleView = (PortatilID) => {
    setShowModal(true)
    setID(PortatilID)

  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-3 w-12">
              <input
                type="checkbox"/>
            </th>
            <th scope="col" className="px-4 py-3 w-56 text-base">
              Portatil
            </th>
            <th scope="col" className="px-4 py-3 w-56 text-base">
              Modelo
            </th>
            <th scope="col" className="px-6 py-3 text-base">
              Direccion IP
            </th>
            <th scope="col" className="px-2 py-3 w-36 text-base">
              Pool
            </th>
            <th scope="col" className="px-6 py-3 w-1">
              <span className="sr-only">View</span>
            </th>
            <th scope="col" className="px-6 py-3 w-1">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody>

          {
            portatiles?.map(({ PortatilID, Portatil, Direccion_ip_torre, Pool, Modelo }) => {
              return (
                <tr key={PortatilID}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-4">
                    <input
                      onChange={() => console.log(PortatilID)}
                      type="checkbox"/>
                  </td>
                  <td scope="row" className="px-4 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    {Portatil}
                  </td>
                  <td scope="row" className="px-4 py-4 text-base text-gray-900 whitespace-nowrap dark:text-white ">
                    {Modelo}
                  </td>
                  <td className="px-6 py-4 w-36 text-base">
                    {Direccion_ip_torre}
                  </td>
                  <td className="px-4 py-4 w-36 text-base">
                    <input
                      type="checkbox"
                      disabled={true}

                      defaultChecked={Pool}
                    />
                  </td>

                  <td className="px-6 py-4 text-right w-1">
                    <button onClick={(() => handleView(PortatilID))}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                      </svg>


                    </button>
                  </td>

                  <td className="px-6 py-4 text-right w-1">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                      </svg>

                    </a>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>

      {
        showModal && <Modal setShowModal={setShowModal} PortatilID={ID}/>
      }
    </>
  )

}