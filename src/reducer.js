import { PATHS } from './constants'

export const initialState = { paths: PATHS }

export default function reducer(state, action) {
  const { type } = action
  const activePath = PATHS.find(path => type === path)

  switch (type) {
    case activePath:
      return {
        ...state,
        currentPath: type,
      }
    default:
      return state
  }
}
