import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
};

export default UseState;