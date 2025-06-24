import { useContext } from 'react'
import { AppContext } from '../AppContext'
import TaskItem from './TaskItem'
import EmptyList from './EmptyList'

export default function TaskList() {
  const { todoList } = useContext(AppContext)
  const reversedList = todoList.slice().reverse()

  return (
    <>
      {!todoList || todoList.length < 1 ? (
        <EmptyList />
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {reversedList.map(item => (
            <TaskItem key={item.id} props={item} />
          ))}
        </ul>
      )}
    </>
  )
}
