import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'

export default function App() {
  return (
    <div className="flex-1 max-w-md mx-auto p-8">
      <Task1 />
      <div className="divider"></div>
      <Task2 />
      <div className="divider"></div>
      <Task3 />
    </div>
  )
}
