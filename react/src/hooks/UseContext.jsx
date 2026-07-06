import React, { createContext, useContext, useState } from "react";

// createContext makes a "box" that any descendant component can read from,
// without passing props down manually through every level (avoids "prop drilling").
const ThemeContext = createContext("light");

const ThemedButton = () => {
  // useContext reads the current value from the nearest <ThemeContext.Provider>
  // above this component in the tree.
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === "dark" ? "#333" : "#eee", color: theme === "dark" ? "#fff" : "#000" }}>
      Current theme: {theme}
    </button>
  );
};

const UseContext = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      {/* The Provider's "value" prop is what useContext() will return
          inside any component nested underneath it. */}
      <ThemeContext.Provider value={theme}>
        <ThemedButton />
      </ThemeContext.Provider>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
    </div>
  );
};

export default UseContext;
