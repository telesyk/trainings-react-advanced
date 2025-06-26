function Factorial({ number }) {
  // Add useMemo here
  const result = heavyFactorial(number)
  return <div>Result: {result}</div>
}

export default function App() {
  return (
    <div className="flex-1 max-w-md mx-auto p-8 bg-base-200">
      <h1 className="text-2xl">🟢 Exercise 1: Memoize Expensive Calculation</h1>
      You have a component that calculates factorial. Prevent it from
      recalculating if the input hasn't changed.
    </div>
  )
}
