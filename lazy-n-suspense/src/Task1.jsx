import { lazy, Suspense, useState } from 'react'
import SettingsButton from './components/SettingsButton'
import SettingsLoader from './components/SettingsLoader'

const Modal = lazy(() => import('./components/SettingsModal'))

export default function Task1() {
  const [isOpen, setOpen] = useState(false)
  const handleSettingsButton = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className="min-w-xs">
      <SettingsButton onClick={handleSettingsButton} />
      {isOpen && (
        <Suspense fallback={<SettingsLoader />}>
          <Modal isOpen={isOpen} onClick={handleSettingsButton} />
        </Suspense>
      )}
    </div>
  )
}
