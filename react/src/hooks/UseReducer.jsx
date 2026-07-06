import React, { useReducer } from "react";

// The reducer is a pure function: (currentState, action) => newState.
// It's like useState, but better when the next state depends on the
// previous state in more complex ways, or when you have several
// related pieces of state that update together.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type: " + action.type);
  }
};

const UseReducer = () => {
  // useReducer(reducer, initialState) returns the current state
  // and a "dispatch" function used to send actions to the reducer.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* dispatch({ type: ... }) is how you trigger a state update —
          the reducer decides what the new state should be. */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
