import { useContext } from 'react'
import { RouterContext } from '../RouterContext'
import {
  PATH_CONTEXT_API,
  PATH_CONTEXT_API_SIMPLE_AUTH,
  PATH_USE_REDUSER_TODO,
  PATH_USE_REDUSER_TOGGLE_N_COUTER,
} from '../constants'
import Page1 from '../../context-api/src/App'
import Page2 from '../../context-api-simple-auth/src/App'
import Page3 from '../../use-reducer-toggle-n-counter/src/App'
import Page4 from '../../use-reducer-todo/src/App'
import Home from './Home'

export default function Router() {
  const { currentRout } = useContext(RouterContext)

  switch (currentRout) {
    case PATH_CONTEXT_API:
      return <Page1 />
    case PATH_CONTEXT_API_SIMPLE_AUTH:
      return <Page2 />
    case PATH_USE_REDUSER_TOGGLE_N_COUTER:
      return <Page3 />
    case PATH_USE_REDUSER_TODO:
      return <Page4 />
    default:
      return <Home />
  }
}
