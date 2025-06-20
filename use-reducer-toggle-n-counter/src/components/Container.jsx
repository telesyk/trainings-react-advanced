export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-lg min-h-screen grid place-content-center gap-8 p-8">
      <h1 className="text-2xl font-semibold text-center">Vite + React</h1>
      {children}
      <p className="read-the-docs">
        Simple exercise with <kbd className="kbd kbd-sm">useReducer</kbd> hook
        on React
      </p>
    </div>
  )
}
