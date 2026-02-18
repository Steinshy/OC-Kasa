import { Component } from 'react';
import { Link } from 'react-router';

const DefaultFallback = () => (
  <div className="error-fallback">
    <h2>Une erreur est survenue</h2>
    <p>Désolé, quelque chose s&apos;est mal passé.</p>
    <Link to="/">Retour à l&apos;accueil</Link>
  </div>
);

const withErrorBoundary = (
  WrappedComponent,
  FallbackComponent = DefaultFallback
) => {
  return class WithErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught by withErrorBoundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <FallbackComponent error={this.state.error} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
