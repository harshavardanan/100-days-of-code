import React, { useId } from "react";

const UseId = () => {
  // useId generates a stable, unique ID for THIS component instance,
  // consistent between server and client rendering. Useful for linking
  // a <label> to an <input> without hardcoding an id that might clash
  // if the component is rendered more than once on the page.
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Email:</label>
      <input id={id} type="email" placeholder="you@example.com" />

      {/* Rendering the same component twice proves each instance
          gets its OWN unique id, so the two labels/inputs below
          don't collide with the ones above. */}
      <UseIdField />
    </div>
  );
};

const UseIdField = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Username:</label>
      <input id={id} type="text" placeholder="username" />
    </div>
  );
};

export default UseId;
