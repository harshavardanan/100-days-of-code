import React, { useState } from "react";

// React.memo wraps a component so React SKIPS re-rendering it if its
// props are shallowly equal to the previous render's props.
// Without memo, EVERY child re-renders whenever the parent re-renders,
// even if that child's own props never changed.
const ExpensiveChild = React.memo(({ label }) => {
  console.log(`ExpensiveChild "${label}" rendered`);
  return <p>{label}</p>;
});

const ReactMemoExample = () => {
  const [count, setCount] = useState(0);
  const [unrelated, setUnrelated] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>

      <p>Unrelated: {unrelated}</p>
      <button onClick={() => setUnrelated(unrelated + 1)}>Increment unrelated</button>

      {/* label is a constant string, so its value NEVER changes.
          Check the console: this child only logs once, even though
          the parent re-renders on every button click above. */}
      <ExpensiveChild label="I only re-render if my props change" />
    </div>
  );
};

export default ReactMemoExample;
