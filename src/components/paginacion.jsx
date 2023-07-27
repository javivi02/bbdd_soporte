export const Paginacion = ({ paginaActual, totalPaginas, paginaSiguiente, paginaAnterior, portatilPagina }) => {

  console.log(totalPaginas)


  return (

    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base p-4">
        <li>
          <button onClick={paginaAnterior}
             className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </li>

        {
          [...Array(totalPaginas)].map((e, i) => {

            return (
              <button key={i}
                      onClick={() => console.log(i + 1)}
                      className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i + 1}
              </button>
            )
          })
        }

        <li>
          <button onClick={paginaSiguiente}
             className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m1 9 4-4-4-4"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}