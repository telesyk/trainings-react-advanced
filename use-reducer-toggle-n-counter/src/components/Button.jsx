export default function Button({ children, className, onClick }) {
  const classes = 'btn ' + className

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
