import Task1 from './Task1'
import Task2 from './Task2'

export default function App() {
  return (
    <div className="flex-1 max-w-md mx-auto p-8">
      <Task1 />
      <div className="divider"></div>
      <Task2 cureentValue={6} />
      <div className="divider"></div>
    </div>
  )
}
