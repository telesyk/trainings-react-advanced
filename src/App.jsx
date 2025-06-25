import { Container, Footer, Navbar } from './components'
import { RouterProvider } from './RouterContext'

function App() {
  return (
    <RouterProvider>
      <Navbar />
      <Container />
      <Footer />
    </RouterProvider>
  )
}

export default App
