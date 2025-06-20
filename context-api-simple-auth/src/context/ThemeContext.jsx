import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('cupcake')

  const toggleTheme = () => {
    setTheme(prev => (prev !== 'cupcake' ? 'cupcake' : 'coffee'))
    document.firstElementChild.setAttribute('data-theme', theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
