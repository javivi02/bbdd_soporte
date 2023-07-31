import { useState } from 'react'

export const Theme = () => {

  const [tema, setTema] = useState(document.documentElement.className === 'dark')
  const handleTheme = () => {
    setTema(document.documentElement.classList.toggle('dark'))
    tema ? localStorage.theme = 'light' : localStorage.theme = 'dark'
  }

  return (

    <label className="inline-flex relative items-center cursor-pointer">
      <input onClick={handleTheme}
             type="checkbox"
             defaultChecked={tema}
             value=""
             className="sr-only peer"/>
      <div
        className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{tema ? '🌚' : '🌞'}</span>
    </label>

  )
}