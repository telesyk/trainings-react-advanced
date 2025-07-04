import { lazy, Suspense, useState } from 'react'
import SettingsButton from './components/SettingsButton'
import SettingsLoader from './components/SettingsLoader'
import { SETTINGS_MODAL_ID } from './constants'

const Modal = lazy(() => import('./components/SettingsModal'))

export default function Task1() {
  const [isOpen, setOpen] = useState(false)
  const handleSettingsButton = () => {
    if (!isOpen) document.getElementById(SETTINGS_MODAL_ID).showModal()
    setOpen(prev => !prev)
  }

  return (
    <div className="min-w-xs">
      <SettingsButton onClick={handleSettingsButton} />
      <Suspense fallback={<SettingsLoader />}>
        <Modal onClick={handleSettingsButton} />
      </Suspense>
    </div>
  )
}
