import React, { useState, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  // useLayoutEffect fires SYNCHRONOUSLY after React updates the DOM,
  // but BEFORE the browser paints the screen. Use it when you need to
  // measure/adjust the DOM and want the change to be invisible to the
  // user (no flash of the "old" layout).
  // Regular useEffect fires AFTER the paint, so a measurement-driven
  // change made there can sometimes flicker.
  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "50%", padding: "10px", background: "#eee" }}
      >
        Resize the window to see the measured width update on reload.
      </div>
      <p>Measured box width: {width}px</p>
    </div>
  );
};

export default UseLayoutEffect;
