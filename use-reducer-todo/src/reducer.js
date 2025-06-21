export const initialState = []

export default function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, payload]
    case 'toggle':
      return [...state, payload]
    case 'remove':
      return [...state, payload]
    default:
      return state
  }
}
