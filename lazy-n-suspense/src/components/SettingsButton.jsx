import { IoSettingsOutline } from 'react-icons/io5'

export default function SettingsButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-wide btn-neutral">
      <span>Settings</span>
      <IoSettingsOutline />
    </button>
  )
}
