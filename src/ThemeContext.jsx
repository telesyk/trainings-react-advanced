import { createContext, useEffect, useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { ACTION_THEME } from './constants'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    document.firstElementChild.setAttribute('data-theme', state.theme)
  }, [state.theme])

  const handleTheme = () => {
    dispatch({ type: ACTION_THEME })
  }

  return (
    <ThemeContext.Provider value={{ theme: state.theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
