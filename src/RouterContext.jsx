import { createContext, useEffect, useReducer, useState } from 'react'
import reducer, { initialState } from './reducer'
import { cleanPath } from './utils'

export const RouterContext = createContext()

export function RouterProvider({ children }) {
  const [currentRout, setRout] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setRout(state.currentPath)
  }, [state.currentPath])

  const handleRout = event => {
    event.preventDefault()

    const pathName = cleanPath(event.currentTarget.pathname)

    dispatch({ type: pathName })
  }

  return (
    <RouterContext.Provider value={{ currentRout, handleRout }}>
      {children}
    </RouterContext.Provider>
  )
}
