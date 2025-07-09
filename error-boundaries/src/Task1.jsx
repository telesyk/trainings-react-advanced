import { useState } from 'react'

export default function Task1() {
  const [count, setCount] = useState(0)

  if (count > 2) throw new Error('Comoponent Task1. Counting error')

  const handleClick = e => setCount(prev => prev + 1)

  return (
    <>
      <button className="btn btn-neutral btn-xl" onClick={handleClick}>
        Counting
      </button>
      <p className="my-4 text-xl">{count}</p>
    </>
  )
}
