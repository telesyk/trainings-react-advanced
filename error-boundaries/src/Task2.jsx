import ErrorBoundary from './components/ErrorBoundary'
import { RandomComponent } from './components/RandomComponent'

export default function Task2() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold mb-4">Component Dashboard</h1>

      {[1, 2, 3].map(id => (
        <ErrorBoundary key={id}>
          <RandomComponent id={id} />
        </ErrorBoundary>
      ))}
    </div>
  )
}
