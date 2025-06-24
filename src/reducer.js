import { PATHS } from './constants'
import { createSet } from './utils'

const pathsSet = createSet(PATHS)

export const initialState = { paths: PATHS }

export default function reducer(state, action) {
  const { type } = action

  if (pathsSet.has(type)) {
    console.log(type)
    return {
      ...state,
      currentPath: type,
    }
  }

  return state
}
