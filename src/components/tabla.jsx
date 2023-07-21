// eslint-disable-next-line react/prop-types
export const Tabla = ({ portatiles }) => {

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Portatil
            </th>
            <th scope="col" className="px-6 py-3">
              Direccion IP
            </th>
            <th scope="col" className="px-6 py-3">
              Pool
            </th>
            <th scope="col" className="px-6 py-3">
              Observaciones
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">View</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody>

          {
            portatiles?.map(({ PortatilID, Portatil, Direccion_ip_torre, Pool, Observaciones }) => {
              return (
                <tr key={PortatilID}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {Portatil}
                  </th>
                  <td className="px-6 py-4">
                    {Direccion_ip_torre}
                  </td>
                  <td className="px-6 py-4">
                    {Pool}
                  </td>
                  <td className="px-6 py-4">
                    {Observaciones}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>


                    </a>
                  </td>

                  <td className="px-6 py-4 text-right">
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
    </>
  )

}