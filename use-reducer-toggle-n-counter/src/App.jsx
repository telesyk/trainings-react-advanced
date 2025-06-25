import { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { Button, Container } from './components'
import { ACTION_DECREMENT, ACTION_INCREMENT } from './constants'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Container>
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
  )
}

export default App
