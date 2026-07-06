import React, { useState, useMemo } from "react";

// A deliberately slow function, to make the benefit of useMemo visible.
const slowSquare = (n) => {
  console.log("Calculating square...");
  for (let i = 0; i < 500000000; i++) {} // simulate expensive work
  return n * n;
};

const UseMemo = () => {
  const [number, setNumber] = useState(2);
  const [theme, setTheme] = useState("light");

  // useMemo(fn, deps) only re-runs fn when a value in "deps" changes.
  // Without it, slowSquare would re-run on EVERY render — including
  // when we just toggle the theme below, which has nothing to do with it.
  const square = useMemo(() => slowSquare(number), [number]);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#222", color: theme === "light" ? "#000" : "#fff" }}>
      <p>Number: {number}, Square: {square}</p>
      <button onClick={() => setNumber(number + 1)}>Increment number</button>
      {/* Toggling theme causes a re-render, but square is NOT
          recalculated because "number" (its dependency) didn't change. */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
    </div>
  );
};

export default UseMemo;
