import { lazy, Suspense, useState } from 'react'
import SettingsLoader from './components/SettingsLoader'
import ChartToggle from './components/ChartToggle'

const ChartPanel = lazy(() => import('./components/ChartPanel'))

export default function Task3() {
  const [showChart, setChart] = useState(false)

  const handleChartToggle = () => {
    setChart(prev => !prev)
  }

  return (
    <div>
      <div className="p-4 gap-2 flex justify-center">
        <div>Show Charts:</div>
        <ChartToggle isShow={showChart} onChange={handleChartToggle} />
      </div>
      {showChart && (
        <Suspense fallback={<SettingsLoader />}>
          <ChartPanel />
        </Suspense>
      )}
    </div>
  )
}
