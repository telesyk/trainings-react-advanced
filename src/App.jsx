import { Container, Footer, Navbar } from './components'
import { RouterProvider } from './RouterContext'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    <RouterProvider>
      <ThemeProvider>
        <Navbar />
        <Container />
        <Footer />
      </ThemeProvider>
    </RouterProvider>
  )
}

export default App
