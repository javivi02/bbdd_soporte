import './App.css'
import { Tabla } from './components/tabla.jsx'
import { useEffect, useState } from 'react'
import { getPortatiles } from './service/portatiles.js'

const App = () => {

  const [portatiles, setPortatiles] = useState([])

  useEffect(() => {

    getPortatiles().then((data) => {
      setPortatiles(data)
      //console.log(data)
    })

  }, [])


  return (
    <>
      <div className="flex flex-col h-screen items-center pt-4">
        <h1 className="text-4xl font-bold">BBDD SOPORTE</h1>
        <Tabla portatiles={portatiles}/>
      </div>
    </>
  )
}

export default App
