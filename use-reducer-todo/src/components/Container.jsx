export default function Container({ children }) {
  return (
    <div className="w-full min-h-screen p-8">
      <div className="mx-auto max-w-md flex flex-col">{children}</div>
    </div>
  )
}
