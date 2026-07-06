import React, { useState, lazy, Suspense } from "react";

// lazy() delays loading a component's code until it's actually needed —
// this creates a separate JS chunk that's fetched on demand instead of
// bloating the initial bundle. Here we fake a "heavy" component that
// pretends to load slowly by artificially delaying its import.
const HeavyComponent = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: () => <p>Heavy component finally loaded!</p>,
      });
    }, 1500);
  })
);

const LazySuspenseExample = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Load heavy component</button>
      {show && (
        // Suspense shows its "fallback" UI while the lazy component's
        // code is still being fetched, then swaps to the real thing.
        <Suspense fallback={<p>Loading component...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazySuspenseExample;
