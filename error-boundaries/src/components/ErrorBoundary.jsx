import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true } // Correctly return an object to update state
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ errorInfo: errorInfo }) // Only update errorInfo here

    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4">
          <h1 className="text-warning-content">Error, check your log</h1>
          {/* Only show errorInfo if it exists */}
          {this.state.errorInfo && (
            <div className="mockup-code w-full">
              <pre data-prefix="⚠️" className="text-warning">
                <code>[Error] Check your log</code>
              </pre>
              <pre data-prefix="❌" className="text-error">
                <code>{JSON.stringify(this.state.errorInfo)}</code>
              </pre>
            </div>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
