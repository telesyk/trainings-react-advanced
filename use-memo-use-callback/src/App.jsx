import { useState } from 'react'
import Factorial, { INPUT_NAME } from './Task1'

export default function App() {
  const [facNum, setFacNum] = useState(1)

  const actionSubmit = formData => setFacNum(Number(formData.get(INPUT_NAME)))

  return (
    <div className="flex-1 max-w-md mx-auto p-8 bg-base-200">
      <h1 className="text-2xl">🟢 Exercise 1: Memoize Expensive Calculation</h1>
      <Factorial number={facNum} action={actionSubmit} />
      <div className="divider"></div>
    </div>
  )
}
