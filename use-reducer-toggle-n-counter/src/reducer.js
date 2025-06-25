import { ACTION_DECREMENT, ACTION_INCREMENT } from './constants'
export const initialState = { count: 0 }

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case ACTION_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}
