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

                    <button onClick={(() => handleView(PortatilID))}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                      </svg>
                    </button>

                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>

                    </button>

                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/>
                      </svg>

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
        showModal && <Modal setShowModal={setShowModal} PortatilID={ID}/>
      }
    </>
  )

}