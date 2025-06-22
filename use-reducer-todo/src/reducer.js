import { ACTION_TYPE } from './constants'

export const initialState = [
  {
    name: 'Create new calendar',
    date: '02/05/2025',
    rawDate: 1746144000000,
  },
  {
    name: 'Look for new investments',
    date: '17/05/2025',
    rawDate: 1747420800000,
  },
  {
    name: 'Book an appartment for a vacation',
    date: '20/05/2025',
    rawDate: 1747680000000,
  },
]

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.add:
      return [...state, payload]
    case ACTION_TYPE.update:
      return [...state, payload]
    case ACTION_TYPE.remove:
      return [...state, payload]
    default:
      return state
  }
}
