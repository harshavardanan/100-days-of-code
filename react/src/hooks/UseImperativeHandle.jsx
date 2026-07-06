import React, { useRef, forwardRef, useImperativeHandle } from "react";

// forwardRef lets a parent attach a ref to THIS component, even though
// it's a function component (which normally can't receive a ref).
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // useImperativeHandle customizes what the parent's ref.current actually
  // exposes. Instead of exposing the raw DOM node, we expose a small
  // custom API — here, just a "focus" and "clear" method.
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} placeholder="Fancy input" />;
});

const UseImperativeHandle = () => {
  const fancyInputRef = useRef(null);

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      {/* We're calling the CUSTOM methods we defined above,
          not raw DOM methods — the child controls what's exposed. */}
      <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
      <button onClick={() => fancyInputRef.current.clear()}>Clear</button>
    </div>
  );
};

export default UseImperativeHandle;
