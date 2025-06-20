import { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { Button, Container, Switcher } from './components'
import { ACTION_DECREMENT, ACTION_INCREMENT } from './constants'
import { ThemeProvider } from './ThemeContext'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeProvider>
      <Container>
        <Switcher />
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body items-center text-center">
            <p className="card-title">Count is {state.count}</p>
            <div className="card-actions">
              <Button
                className="btn-primary"
                onClick={() => dispatch({ type: ACTION_INCREMENT })}
              >
                +
              </Button>
              <Button onClick={() => dispatch({ type: ACTION_DECREMENT })}>
                -
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
