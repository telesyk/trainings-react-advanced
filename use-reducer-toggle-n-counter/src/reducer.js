export const initialState = { count: 0, darkMode: false }

export default function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'darkMode':
      return {
        ...state,
        isDark: !state.isDark,
      }
    default:
      return state
  }
}
