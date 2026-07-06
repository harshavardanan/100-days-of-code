import React, { useRef, useEffect, useState } from "react";

const UseRef = () => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  });

  return (
    <div>
      {/* ref={inputRef} tells React: "store a reference to this DOM node
          inside inputRef.current" */}
      <input
        ref={inputRef}
        placeholder="Type Something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <p>content: {content}</p>
    </div>
  );
};

export default UseRef;
