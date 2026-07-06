import React, { useState, useEffect } from "react";

// A custom hook is just a regular function whose name starts with "use"
// and that calls other hooks inside it. It lets you EXTRACT and REUSE
// stateful logic across components, without repeating the same
// useState/useEffect wiring everywhere.
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // Cleanup: remove the listener when this component unmounts,
    // so we don't leak listeners every time it's used.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const CustomHookExample = () => {
  // Any component can now get live window width with ONE line,
  // instead of duplicating the useState + useEffect + listener logic.
  const width = useWindowWidth();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Resize your browser window to see this update.</p>
    </div>
  );
};

export default CustomHookExample;
