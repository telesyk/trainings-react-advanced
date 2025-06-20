import { AuthProvider, ThemeProvider } from './context'
import { Login, Switcher } from './components'

function App() {
  return (
    <ThemeProvider>
      <div className="max-w-lg min-h-screen mx-auto grid place-content-center gap-8 p-8 lg:p-16">
        <AuthProvider>
          <Switcher />
          <Login />
        </AuthProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
