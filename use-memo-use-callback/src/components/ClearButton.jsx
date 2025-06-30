import { FaTrashAlt } from 'react-icons/fa'

export default function ClearButton({ handleClean }) {
  return (
    <button onClick={handleClean} className="btn btn-circle btn-primary">
      <FaTrashAlt />
    </button>
  )
}
