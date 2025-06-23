import { useContext, useRef } from 'react'
import { INPUT_CONTROL } from '../constants'
import { FaClipboardList } from 'react-icons/fa'
import { AppContext } from '../AppContext'

export default function InputBlock() {
  const { handleListUpdate } = useContext(AppContext)
  const formRef = useRef()

  const submitAction = formData => {
    const currentDate = Date.parse(new Date())

    handleListUpdate(
      null,
      {
        id: currentDate,
        name: formData.get(INPUT_CONTROL.name),
        rawDate: currentDate,
        isChecked: false,
      },
      formRef.current
    )
  }

  return (
    <form
      className="join w-full p-4"
      action={submitAction}
      data-control="add"
      ref={formRef}
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
      <button
        type="submit"
        className="btn btn-accent join-item capitalize flex-auto"
      >
        {INPUT_CONTROL.name}
      </button>
    </form>
  )
}
