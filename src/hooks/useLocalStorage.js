import { useState } from 'react'

export const useLocalStorage = (key = 'user', initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const { Usuario, token } = storedValue

  return { Usuario, token }

}