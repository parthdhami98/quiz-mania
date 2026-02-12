import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    console.error('Error caught by boundary:', error, errorInfo);
    // In production, you could log to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-6xl mb-4">😕</h1>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">QUIZ</span>
              <span className="text-primary font-bold">Mania</span>
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 mb-6">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
