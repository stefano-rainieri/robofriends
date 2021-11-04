import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return <h1>Whoops! That's not good.</h1>
  }
}