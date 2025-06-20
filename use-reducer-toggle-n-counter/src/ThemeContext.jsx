import { createContext, useReducer, useEffect } from 'react'
import reducer, { initialState } from './reducer'
import { ACTION_THEME } from './constants'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Update DOM when theme changes
  useEffect(() => {
    document.firstElementChild.setAttribute('data-theme', state.theme)
  }, [state.theme])

  const toggleTheme = () => {
    dispatch({ type: ACTION_THEME })
  }

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
