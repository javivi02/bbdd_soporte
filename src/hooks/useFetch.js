import { useState, useEffect, useRef } from 'react'

export const useFetch = (url, token) => {

  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {

    setState({ data: null, loading: true, error: null })

    fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
      }
    )
      .then(resp => resp.json())
      .then(data => {

        //console.log(data)

        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          })
        }

      })

  }, [url])

  return state
}