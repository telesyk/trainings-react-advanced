import { createContext, useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { ACTION_THEME } from './constants'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme = () => {
    dispatch({ type: ACTION_THEME })
    document.firstElementChild.setAttribute('data-theme', state.theme)
  }

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
