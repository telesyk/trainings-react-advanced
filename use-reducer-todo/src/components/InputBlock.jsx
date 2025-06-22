import { useContext } from 'react'
import { INPUT_CONTROL } from '../constants'
import { FaClipboardList } from 'react-icons/fa'
import { AppContext } from '../AppContext'

export default function InputBlock() {
  const { handleListUpdate } = useContext(AppContext)

  return (
    <form
      className="join w-full p-4"
      onSubmit={handleListUpdate}
      data-control="add"
    >
      <div className="flex-auto">
        <label className="input validator join-item">
          <FaClipboardList className="h-[1em] opacity-50" />
          <input
            type="text"
            placeholder={INPUT_CONTROL.placeholder}
            name={INPUT_CONTROL.name}
            required
          />
        </label>
        <div className="validator-hint hidden">
          {INPUT_CONTROL.validatorHint}
        </div>
      </div>
      <button className="btn btn-accent join-item capitalize flex-auto">
        {INPUT_CONTROL.name}
      </button>
    </form>
  )
}
