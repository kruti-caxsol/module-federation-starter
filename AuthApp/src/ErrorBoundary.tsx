import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error: Error) {
  //   console.log("error", error);
  //   return { hasError: true };
  // }

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //   // Log error to reporting service
  //   console.log("print error", error, errorInfo);
  // }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
