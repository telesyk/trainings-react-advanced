import { AuthProvider } from './AuthContext'
import { Login } from './components'

function App() {
  return (
    <AuthProvider>
      <div className="max-w-lg mx-auto p-8 lg:p-16">
        <Login />
      </div>
    </AuthProvider>
  )
}

export default App
