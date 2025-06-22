import { createContext, useReducer } from 'react'
import reducer, { initialState } from './reducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleListUpdate = event => {
    event.preventDefault()

    const eventType = event.currentTarget.dataset.control
    console.log('[DEBUG]', eventType)
    // dispatch({ type: eventType })
  }

  return (
    <AppContext.Provider value={{ todoList: state, handleListUpdate }}>
      {children}
    </AppContext.Provider>
  )
}
