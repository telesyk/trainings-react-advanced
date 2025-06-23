import { createContext, useEffect, useReducer, useState } from 'react'
import reducer, { initialState } from './reducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setTodoList(state)
  }, [state])

  const handleListUpdate = (event, payload, target = null) => {
    if (event !== null) {
      event.preventDefault()
    }
    const eventType =
      event?.currentTarget?.dataset?.control || target.dataset.control

    dispatch({ type: eventType, payload: payload || [] })
  }

  return (
    <AppContext.Provider value={{ todoList, handleListUpdate }}>
      {children}
    </AppContext.Provider>
  )
}
