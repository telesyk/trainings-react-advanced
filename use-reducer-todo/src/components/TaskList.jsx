import TaskItem from './TaskItem'

export default function TaskList() {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {[
        { name: 'Dua Lipo', date: '20/05/2025' },
        { name: 'Learn Typescript', date: '17/05/2025' },
        { name: 'Learn Node.js', date: '10/05/2025' },
      ].map(item => (
        <TaskItem key={item.date} name={item.name} date={item.date} />
      ))}
    </ul>
  )
}
