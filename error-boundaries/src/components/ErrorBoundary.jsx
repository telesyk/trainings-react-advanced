import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false, errorInfo: [] }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true } // Correctly return an object to update state
  }

  componentDidCatch(error, errorInfo) {
    const errorListStack = errorInfo.componentStack.trim().split('\n    ')

    this.setState({ errorInfo: errorListStack }) // Only update errorInfo here
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-1 max-w-xl mx-auto p-8">
          {/* Only show errorInfo if it exists */}
          {this.state.errorInfo && (
            <div className="mockup-code w-full">
              <pre data-prefix="⚠️" className="text-warning">
                <code>[Error] Check your log</code>
              </pre>
              {this.state.errorInfo.map(item => (
                <pre key={item} data-prefix="❌" className="text-error">
                  <code>{item}</code>
                </pre>
              ))}
            </div>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
