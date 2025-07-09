import { Component } from 'react'

const errorLog = []

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: [] }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.message } // Correctly return an object to update state
  }

  componentDidCatch(error, info) {
    const logEntry = {
      error: error.message,
      componentStack: info.componentStack,
      timestamp: new Date().toISOString(),
    }

    console.error('Logged error', logEntry)
    errorLog.push(logEntry)
    localStorage.setItem('errorLog', JSON.stringify(errorLog))
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-1 max-w-xl mx-auto p-8">
          {/* Only show errorMessage if it exists */}
          {this.state.errorMessage && (
            <div className="mockup-code w-full">
              <pre data-prefix="⚠️" className="text-warning">
                <code>[Error] Component crashed</code>
              </pre>
              <pre data-prefix="❌" className="text-error">
                <code>{this.state.errorMessage}</code>
              </pre>
            </div>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
