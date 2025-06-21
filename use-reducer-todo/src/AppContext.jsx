import { createContext, useReducer } from 'react'
import reducer, { initialState } from './reducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const { todoList, setTodoList } = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </AppContext.Provider>
  )
}
