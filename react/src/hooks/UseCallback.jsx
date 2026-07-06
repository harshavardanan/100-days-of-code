import React, { useState, useCallback } from "react";

// React.memo makes this component skip re-rendering if its props
// haven't changed (shallow comparison).
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click child</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Without useCallback, this arrow function would be a BRAND NEW
  // function on every render — which would break React.memo on Child,
  // since "a new function" counts as "a changed prop".
  // useCallback(fn, deps) keeps the SAME function reference across
  // renders as long as deps don't change.
  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}, Theme: {theme}</p>
      {/* Toggling theme re-renders UseCallback, but Child does NOT
          re-render because handleClick's reference stayed the same. */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallback;
