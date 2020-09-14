import React, { Component } from "react";

class PageErrorBoundary extends Component {
  static getDerivedStateFromError(err) {
    return {
      isCrashed: true
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  state = {
    isCrashed: false
  };

  render() {
    const { children } = this.props;

    if (!this.state.isCrashed) {
      return children;
    }

    return <h1>Something went wrong here...</h1>;
  }
}

export default PageErrorBoundary;
