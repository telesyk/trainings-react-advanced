import { FaClipboardList } from 'react-icons/fa'

export default function EmptyList() {
  return (
    <div className="flex flex-col w-full gap-6 p-4 opacity-50">
      <div>
        <FaClipboardList className="size-10" />
      </div>
      <div className="text-2xl">Empty List</div>
      <div className="text-xs font-semibold opacity-60">
        {new Date().toLocaleDateString('en-GB')}
      </div>
    </div>
  )
}
