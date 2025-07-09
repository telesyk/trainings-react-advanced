export function RandomComponent({ id }) {
  if (Math.random() < 0.3) {
    throw new Error(`Random failure in component ${id}`)
  }
  return (
    <div className="p-3 border shadow">Component {id} loaded successfully.</div>
  )
}
