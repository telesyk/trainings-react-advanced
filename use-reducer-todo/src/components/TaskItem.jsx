import { useContext } from 'react'
import { FaTimes, FaClipboardList, FaCheck } from 'react-icons/fa'
import { AppContext } from '../AppContext'

export default function TaskItem({ props }) {
  const { id, name, rawDate, isChecked } = props
  const { handleListUpdate } = useContext(AppContext)
  const newDate = new Date(rawDate)
  const dateString = newDate.toLocaleDateString('en-GB')
  const classes = isChecked ? 'list-row bg-green-500/30' : 'list-row'

  return (
    <li className={classes} id={id}>
      <div>
        <FaClipboardList className="size-10" />
      </div>
      <div>
        <div>{name}</div>
        <div className="text-xs font-semibold opacity-60">{dateString}</div>
      </div>
      <button
        className="btn btn-square btn-ghost"
        data-control="update"
        onClick={event => handleListUpdate(event, id)}
      >
        <FaCheck />
      </button>
      <button
        className="btn btn-square btn-ghost"
        data-control="remove"
        onClick={event => handleListUpdate(event, id)}
      >
        <FaTimes />
      </button>
    </li>
  )
}
