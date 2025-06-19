export default function Button({ children, className, handleClick }) {
  const classes = `btn ${className}`

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}
