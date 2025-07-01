import { useState } from 'react'
import { usePrevious } from './hooks'

export default function Task2() {
  const [curentValue, setValue] = useState(5)
  const prevValue = usePrevious(curentValue)

  const handleInput = e => setValue(e.currentTarget.value)

  return (
    <div className="space-y-4">
      <div>
        <input
          type="number"
          className="input validator min-w-xs"
          required
          placeholder="Type a number between 1 to 10"
          min="1"
          max="10"
          title="Must be between be 1 to 10"
          value={curentValue}
          onInput={handleInput}
        />
        <p className="validator-hint">Must be between be 1 to 10</p>
      </div>
      <div>Previous value is: {prevValue}</div>
    </div>
  )
}
