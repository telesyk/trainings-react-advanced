import { useLocalStorage } from './hooks'

export default function Task3() {
  const [value, setValue] = useLocalStorage('name', 'Guest')

  const handleSubmit = e => {
    e.preventDefault()

    setValue(e.currentTarget[0].value)
    e.currentTarget[0].value = ''
  }

  return (
    <>
      <div>Task3: {value}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input min-w-xs"
          required
          placeholder="Type some text value"
        />
      </form>
    </>
  )
}
