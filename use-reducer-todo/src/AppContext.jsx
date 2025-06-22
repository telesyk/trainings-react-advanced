import { createContext, useReducer } from 'react'
import reducer, { initialState } from './reducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const { todoList, setTodoList } = useReducer(reducer, initialState)

  const handleListUpdate = event => {
    event.preventDefault()
    console.log('[DEBUG]', event.currentTarget)
  }

  return (
    <AppContext.Provider value={{ todoList, handleListUpdate }}>
      {children}
    </AppContext.Provider>
  )
}
