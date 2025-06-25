import { ACTION_THEME, PATHS, THEME_DARK, THEME_LIGHT } from './constants'

export const initialState = { paths: PATHS, theme: THEME_DARK }

export default function reducer(state, action) {
  const { type } = action
  const activePath = PATHS.find(path => type === path)

  switch (type) {
    case activePath:
      return {
        ...state,
        currentPath: type,
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
