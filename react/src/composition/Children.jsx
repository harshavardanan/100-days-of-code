import React from "react";

// A "Card" doesn't know or care what's inside it — whatever is nested
// between <Card>...</Card> in the parent becomes "props.children".
// This is the most basic form of composition: building components
// that wrap/layout arbitrary content instead of hardcoding it.
const Card = ({ children }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0" }}>
      {children}
    </div>
  );
};

const ChildrenExample = () => {
  return (
    <div>
      <Card>
        <h3>I'm inside a Card</h3>
        <p>Card had no idea this heading and paragraph existed until now.</p>
      </Card>
      <Card>
        <button>A totally different child</button>
      </Card>
    </div>
  );
};

export default ChildrenExample;
