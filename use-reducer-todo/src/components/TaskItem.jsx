import { useContext } from 'react'
import { FaTimes, FaClipboardList, FaCheck } from 'react-icons/fa'
import { AppContext } from '../AppContext'

export default function TaskItem({ name, date }) {
  const { handleListUpdate } = useContext(AppContext)
  const newDate = new Date(date)
  const dateString = newDate.toLocaleDateString('en-GB')

  return (
    <li className="list-row" id={date}>
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
        onClick={handleListUpdate}
      >
        <FaCheck />
      </button>
      <button
        className="btn btn-square btn-ghost"
        data-control="remove"
        onClick={handleListUpdate}
      >
        <FaTimes />
      </button>
    </li>
  )
}
