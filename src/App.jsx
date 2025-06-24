import { Container } from './components'
import Navbar from './components/Navbar'
import { RouterProvider } from './RouterContext'

function App() {
  return (
    <RouterProvider>
      <Navbar />
      <Container />
    </RouterProvider>
  )
}

export default App
