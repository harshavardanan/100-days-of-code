import React, { useState } from "react";

// Error boundaries catch JS errors thrown during rendering anywhere in
// their child tree and show a fallback UI instead of crashing the whole
// app. As of React 19 there is still NO hook equivalent for this —
// it must be a class component with getDerivedStateFromError/componentDidCatch.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Called during rendering, lets us update state to show a fallback.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Called after an error, good place to log it somewhere.
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong in this part of the UI.</p>;
    }
    return this.props.children;
  }
}

// A component that intentionally throws when a button is clicked,
// to demonstrate the boundary catching it.
const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("I crash when count reaches 3!");
  }

  return <button onClick={() => setCount(count + 1)}>Count: {count} (crashes at 3)</button>;
};

const ErrorBoundaryExample = () => {
  return (
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryExample;
