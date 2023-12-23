import { useContext, useEffect, useState } from 'react'
import { getPortatil } from '../service/portatilService.js'
import { LoginContext } from '../context/loginContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Loading } from './loading.jsx'
import { updatePortatil } from '../service/updatePortatilService.js'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'

export const ModalPortatil = ({ setShowModal, PortatilID, editar }) => {

  const navigate = useNavigate()
  const { user: { token } } = useContext(LoginContext)

  const [loading, setLoading] = useState(true)
  const [portatil, setPortatil] = useState({})

  const {
    Portatil,
    Desafectado,
    Direccion_ip_torre,
    Edicion,
    Modelo,
    Pool,
    Observaciones,
    Portatil_rtve,
    Portatil_serie,
    Direccion_ip_wireless
  } = portatil

  useEffect(() => {

    if (editar) {

      getPortatil(token, PortatilID)
        .then((data) => {
          setPortatil(data)
          setLoading(false)
        })
        .catch(() => {
          console.log('Toquen expirado, redirigir a login')
          navigate('/login', { replace: true })
        })

    } else {

      setLoading(false)

    }
  }, [])

  const handelSubmit = (e) => {
    e.preventDefault()

    const fields = new window.FormData(e.target)
    const data = Object.fromEntries(fields)

    data.Pool = data.Pool === 'on' ? 1 : 0
    data.Desafectado = data.Desafectado === 'on' ? 1 : 0
    data.Edicion = data.Edicion === 'on' ? 1 : 0

    updatePortatil(token, PortatilID, data)
      .then(respuesta => {
        if (respuesta.length === 0) {
          toast.error('Error al actualizar el portatil')
          return
        }
        setShowModal(false)
        toast.success('Portatil actualizado correctamente')
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin: { x: 0.5, }
        })
      })
      .catch(error => {
        console.log(error)
        toast.error('Error al actualizar el portatil')
      })

  }

  if (loading) return <Loading/>

  return (
    <>
      <div
        className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none 
        focus:outline-none backdrop-blur-sm`}>
        <div className="relative w-full max-w-3xl max-h-full">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">

            <div className="items-start p-4 border-b-4 rounded-t dark:border-blue-500">
              <div className="flex items-center justify-between text-gray-900 dark:text-white">
                <h3 className={'text-3xl font-medium tracking-tight '}>
                  {
                    editar ?
                      <div className="flex">
                        <div className="mr-20">Editar equipamiento</div>
                        <div className="text-blue-400 font-bold">{Portatil}</div>
                      </div>
                      :
                      'Añadir nuevo portatil'
                  }
                </h3>
              </div>
            </div>

            <div className="mx-auto max-w-2xl mt-8">
              <form action="#" onSubmit={handelSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mb-8">

                  <div>
                    <label htmlFor="Portatil"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Portatil
                    </label>
                    <input type="text"
                           name="Portatil"
                           id="item-weight"
                           defaultValue={Portatil ?? ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>


                  <div>
                    <label htmlFor="Modelo"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Modelo
                    </label>
                    <input type="text"
                           name="Modelo"
                           id="item-weight"
                           defaultValue={Modelo ?? ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>
                  <div>
                    <label htmlFor="Direccion_ip_torre"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Direccion_ip_torre
                    </label>
                    <input type="text"
                           name="Direccion_ip_torre"
                           id="item-weight"
                           defaultValue={Direccion_ip_torre ?? ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>

                  <div>
                    <label htmlFor="Direccion_ip_wireless"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Direccion_ip_wireless
                    </label>
                    <input type="text"
                           name="Direccion_ip_wireless"
                           id="item-weight"
                           defaultValue={Direccion_ip_wireless ?? ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>


                  <div>
                    <label htmlFor="Portatil_rtve"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Portatil_rtve
                    </label>
                    <input type="text"
                           name="Portatil_rtve"
                           id="item-weight"
                           defaultValue={Portatil_rtve ?? ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>

                  <div>
                    <label htmlFor="Portatil_serie"
                           className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Portatil_serie
                    </label>
                    <input type="text"
                           name="Portatil_serie"
                           id="item-weight"
                           defaultValue={Portatil_serie ?? ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                           required=""/>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 mb-6">

                  <div className="flex items-center pl-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <input id="bordered-checkbox-1"
                           type="checkbox"
                           defaultChecked={Pool ?? false}
                           name="Pool"
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="Pool"
                           className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Pool</label>
                  </div>

                  <div className="flex items-center pl-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <input id="bordered-checkbox-1"
                           type="checkbox"
                           defaultChecked={Desafectado ?? false}
                           name="Desafectado"
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="Desafectado"
                           className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desafectado</label>
                  </div>

                  <div className="flex items-center pl-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <input defaultChecked={Edicion ?? false}
                           id="bordered-checkbox-2"
                           type="checkbox"
                           name="Edicion"
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="Edicion"
                           className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edicion
                    </label>
                  </div>

                </div>

                <div className="mb-12">
                  <label htmlFor="Observaciones"
                         className="block mb-2 font-medium text-gray-900 dark:text-white ">
                    Observaciones
                  </label>
                  <textarea
                    rows={4}
                    cols={50}
                    name="Observaciones"
                    id="item-weight"
                    defaultValue={Observaciones ?? ''}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600
                           block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                           dark:focus:border-primary-500"
                    required=""/>
                </div>

                <div
                  className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="submit"
                    data-modal-hide="defaultModal"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

{/*<div id="updateProductModal" aria-hidden="true"
           className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Product
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateProductModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ex. Apple iMac 27&ldquo;"/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ex. Apple"/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$299"/>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Update product
                </button>
                <button type="button" className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                  <svg className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>*/
}