export default function SettingsModal({ isOpen, onClick }) {
  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <div className="modal-backdrop">
        <button onClick={onClick}>close</button>
      </div>
    </dialog>
  )
}
