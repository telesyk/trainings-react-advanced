import { useContext } from 'react'
import { RouterContext } from '../RouterContext'
import {
  PATH_CONTEXT_API,
  PATH_CONTEXT_API_SIMPLE_AUTH,
  PATH_USE_REDUSER_TODO,
  PATH_USE_REDUSER_TOGGLE_N_COUTER,
  PATH_USE_MEMO_USE_CALLBACK,
  PATH_USE_CUSTOM_HOOK,
  PATH_LAZY_N_SUSPENSE,
  PATH_ERROR_BOUNDARIES,
} from '../constants'
import Page1 from '../../context-api/src/App'
import Page2 from '../../context-api-simple-auth/src/App'
import Page3 from '../../use-reducer-toggle-n-counter/src/App'
import Page4 from '../../use-reducer-todo/src/App'
import Page5 from '../../use-memo-use-callback/src/App'
import Page6 from '../../use-custom-hook/src/App'
import Page7 from '../../lazy-n-suspense/src/App'
import Page8 from '../../error-boundaries/src/App'
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
    case PATH_USE_MEMO_USE_CALLBACK:
      return <Page5 />
    case PATH_USE_CUSTOM_HOOK:
      return <Page6 />
    case PATH_LAZY_N_SUSPENSE:
      return <Page7 />
    case PATH_ERROR_BOUNDARIES:
      return <Page8 />
    default:
      return <Home />
  }
}
