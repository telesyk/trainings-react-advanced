import { AuthProvider } from './context'
import { Login } from './components'

function App() {
  return (
    <div className="max-w-md flex-1 mx-auto grid place-content-center gap-8 p-8 lg:p-16">
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  )
}

export default App
