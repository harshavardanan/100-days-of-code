import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect runs AFTER React renders the component.
  // The array [count] is the "dependency list" — the effect only
  // re-runs when one of these values changes between renders.
  useEffect(() => {
    document.title = `Count: ${count}`;

    // Optional cleanup function: runs before the NEXT effect run,
    // and once more when the component unmounts.
    return () => {
      console.log("Cleaning up previous effect for count:", count);
    };
  }, [count]);

  // An effect with an EMPTY array runs only once, right after the
  // first render (like componentDidMount in class components).
  useEffect(() => {
    console.log("UseEffect component mounted");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffect;
