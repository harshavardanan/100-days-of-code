import React, { useState } from "react";

// A "render prop" is a prop whose value is a FUNCTION that returns JSX.
// Instead of MouseTracker deciding how to display the position, it just
// tracks the data and hands it to whatever function the parent gave it.
// This lets the same logic (mouse tracking) be reused with totally
// different rendered output.
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: "150px", background: "#f0f0f0" }}>
      {/* We call the function passed in as "render", giving it our data. */}
      {render(position)}
    </div>
  );
};

const RenderPropsExample = () => {
  return (
    <div>
      <p>Move your mouse over the box below:</p>
      <MouseTracker render={(pos) => <p>Mouse is at x: {pos.x}, y: {pos.y}</p>} />

      {/* Same tracking logic, completely different output */}
      <MouseTracker
        render={(pos) => (
          <div style={{ position: "relative", height: "100%" }}>
            <span style={{ position: "absolute", left: pos.x - 100, top: pos.y - 50 }}>
              🎯
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default RenderPropsExample;
