import { AuthProvider } from './AuthContext'
import { Login } from './components'

function App() {
  return (
    <div className="max-w-lg min-h-screen mx-auto grid place-content-center p-8 lg:p-16">
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  )
}

export default App
