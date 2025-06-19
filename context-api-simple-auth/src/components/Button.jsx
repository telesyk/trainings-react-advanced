export default function Button({ children, handleClick }) {
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {children}
    </button>
  )
}
