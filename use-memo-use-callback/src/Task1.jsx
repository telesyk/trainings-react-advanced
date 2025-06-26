import { useMemo } from 'react'

export const INPUT_NAME = 'factorial-mumber'

function heavyFactorial(n) {
  if (n < 0) return NaN // factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1

  // simulate delay
  // for (let i = 0; i < 1e7; i++) {} // heavy loop

  return n * heavyFactorial(n - 1)
}

export default function Factorial({ number, action }) {
  // Add useMemo here
  // const result = heavyFactorial(number)
  const result = useMemo(() => heavyFactorial(number), [number])
  return (
    <>
      <h1 className="text-2xl">🟢 Exercise 1: Memoize Expensive Calculation</h1>
      <div>
        Factorial of {number}: {result}
      </div>
      <form action={action} className="join">
        <div>
          <label className="input validator join-item">
            <input name={INPUT_NAME} type="number" placeholder="0" required />
          </label>
          <div className="validator-hint hidden">Enter valid number</div>
        </div>
        <button type="submit" className="btn btn-neutral join-item">
          Calculate
        </button>
      </form>
    </>
  )
}
