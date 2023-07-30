import { useState } from 'react'

export const usePagination = (numero = 10, paginas) => {

  const [currentPage, setCurrentPage] = useState(1)
  const recordPage = numero
  const lastIndex = currentPage * recordPage
  const firsIndex = lastIndex - recordPage
  const records = paginas.slice(firsIndex, lastIndex)
  const npage = Math.ceil(paginas.length / recordPage)
  //const numbers = [...Array(npage + 1).keys()].slice(1)

  return { currentPage, setCurrentPage, records, npage }

}