import { useState } from 'react'
import Factorial, { INPUT_NAME } from './Task1'
import Task2 from './Task2'

export default function App() {
  const [facNum, setFacNum] = useState(1)

  const actionSubmit = formData => setFacNum(Number(formData.get(INPUT_NAME)))

  return (
    <div className="flex-1 max-w-md mx-auto p-8">
      <Factorial number={facNum} action={actionSubmit} />
      <div className="divider"></div>
      <Task2 />
      <div className="divider"></div>
    </div>
  )
}
