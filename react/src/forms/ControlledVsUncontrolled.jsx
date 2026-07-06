import React, { useState, useRef } from "react";

// CONTROLLED: React state is the "single source of truth" for the
// input's value. Every keystroke goes through onChange -> setState ->
// re-render with the new value. Lets you validate/transform on every
// change, but re-renders on every keystroke.
const ControlledForm = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h4>Controlled</h4>
      <input value={value} onChange={(e) => setValue(e.target.value.toUpperCase())} />
      <p>Value (forced uppercase live): {value}</p>
    </div>
  );
};

// UNCONTROLLED: the DOM itself holds the value; React only reads it
// when needed (e.g. on submit), via a ref. No re-render per keystroke,
// but you lose the ability to react to every change.
const UncontrolledForm = () => {
  const inputRef = useRef(null);
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(inputRef.current.value);
  };

  return (
    <div>
      <h4>Uncontrolled</h4>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} defaultValue="" />
        <button type="submit">Submit</button>
      </form>
      <p>Last submitted value: {submitted}</p>
    </div>
  );
};

const ControlledVsUncontrolledExample = () => {
  return (
    <div>
      <ControlledForm />
      <UncontrolledForm />
    </div>
  );
};

export default ControlledVsUncontrolledExample;
