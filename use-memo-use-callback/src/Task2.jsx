import React, { useCallback, useState } from 'react'

const Child = React.memo(({ count, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Re-render time's {count}
    </button>
  )
})

export default function Task2() {
  const [state, setState] = useState({
    count: 0,
    isRendering: false,
  })

  const handleCount = useCallback(() => {
    state.isRendering
      ? setState(prev => ({
          ...prev,
          count: prev.count + 1,
        }))
      : state
  }, [state.count, state.isRendering])

  const handleClick = () => {
    setState(prev => ({
      ...prev,
      isRendering: !prev.isRendering,
    }))
  }

  return (
    <>
      <h1 className="text-2xl">
        🔵 Exercise 2: useCallback for Stable Event Handler
      </h1>
      <div className="flex gap-4 justify-between">
        <Child onClick={handleCount} count={state.count} />
        <button
          className={`btn ${state.isRendering ? 'btn-success' : 'btn-accent'}`}
          onClick={handleClick}
        >
          isRendering: {state.isRendering ? 'On' : 'Off'}
        </button>
      </div>
    </>
  )
}
