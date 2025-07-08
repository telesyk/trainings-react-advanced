import { useState } from 'react'

export default function Task1() {
  const [count, setCount] = useState(0)

  if (count > 3) throw new Error('Its not a counting')

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
