export default function EmptyList({ text }) {
  return (
    <div className="text-xl text-center">
      No <span className="font-mono underline text-fuchsia-200">{text}</span>{' '}
      car in a list
    </div>
  )
}
