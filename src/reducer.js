import { PATHS } from './constants'

const pathsSet = new Set(PATHS)

export const initialState = { paths: PATHS }

export default function reducer(state, action) {
  const { type } = action

  if (pathsSet.has(type)) {
    return {
      ...state,
      currentPath: type,
    }
  }

  return state
}
