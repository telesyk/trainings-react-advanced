import { createContext, useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { cleanPath } from './utils'

export const RouterContext = createContext()

export function RouterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleRout = event => {
    event.preventDefault()

    const pathName = cleanPath(event.currentTarget.pathname)

    dispatch({ type: pathName })
  }

  return (
    <RouterContext.Provider
      value={{ currentRout: state.currentPath || '/', handleRout }}
    >
      {children}
    </RouterContext.Provider>
  )
}
