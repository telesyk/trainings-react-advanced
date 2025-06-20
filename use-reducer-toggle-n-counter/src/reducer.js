import {
  ACTION_THEME,
  ACTION_DECREMENT,
  ACTION_INCREMENT,
  THEME_DARK,
  THEME_LIGHT,
} from './constants'
export const initialState = { count: 0, theme: THEME_DARK }

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
    case ACTION_THEME:
      return {
        ...state,
        theme: state.theme !== THEME_LIGHT ? THEME_LIGHT : THEME_DARK,
      }
    default:
      return state
  }
}
