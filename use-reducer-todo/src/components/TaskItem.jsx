import { useContext } from 'react'
import { FaTimes, FaClipboardList, FaCheck } from 'react-icons/fa'
import { AppContext } from '../AppContext'

export default function TaskItem({ name, date }) {
  const { handleListUpdate } = useContext(AppContext)

  return (
    <li className="list-row">
      <div>
        <FaClipboardList className="size-10" />
      </div>
      <div>
        <div>{name}</div>
        <div className="text-xs font-semibold opacity-60">{date}</div>
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
