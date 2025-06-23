import { ACTION_TYPE } from './constants'

export const initialState = [
  {
    id: 1746144000000,
    name: 'Create new calendar',
    rawDate: 1746144000000,
    isChecked: false,
  },
  {
    id: 1747420800000,
    name: 'Look for new investments',
    rawDate: 1747420800000,
    isChecked: true,
  },
  {
    id: 1747680000000,
    name: 'Book an appartment for a vacation',
    rawDate: 1747680000000,
    isChecked: false,
  },
]

export default function reducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case ACTION_TYPE.add:
      return [...state, payload]
    case ACTION_TYPE.update:
      return state.map(task => {
        if (task.id === payload)
          return {
            ...task,
            isChecked: !task.isChecked,
          }
        return task
      })
    case ACTION_TYPE.remove:
      return state.filter(task => task.id !== payload)
    default:
      return state
  }
}
