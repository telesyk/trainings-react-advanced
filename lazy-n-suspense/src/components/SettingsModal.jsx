import { SETTINGS_MODAL_ID } from '../constants'

export default function SettingsModal({ onClick }) {
  return (
    <dialog id={SETTINGS_MODAL_ID} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClick}>close</button>
      </form>
    </dialog>
  )
}
