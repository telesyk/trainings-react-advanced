import { ACTION_TYPE } from './constants'

export const initialState = []

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.add:
      return [...state, payload]
    case ACTION_TYPE.toggle:
      return [...state, payload]
    case ACTION_TYPE.remove:
      return [...state, payload]
    default:
      return state
  }
}
