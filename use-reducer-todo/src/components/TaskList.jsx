import { useContext } from 'react'
import { AppContext } from '../AppContext'
import TaskItem from './TaskItem'

export default function TaskList() {
  const { todoList } = useContext(AppContext)

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {todoList.map(item => (
        <TaskItem key={item.date} name={item.name} date={item.rawDate} />
      ))}
    </ul>
  )
}
