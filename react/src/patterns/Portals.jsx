import React, { useState } from "react";
import { createPortal } from "react-dom";

// A portal renders children into a DIFFERENT DOM node than where the
// component sits in the React tree — useful for modals/tooltips that
// need to escape a parent's overflow:hidden or z-index stacking context,
// while still behaving like a normal React child (events still bubble
// through the React tree, not the DOM tree).
const Modal = ({ onClose, children }) => {
  return createPortal(
    <div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)", display: "flex",
        alignItems: "center", justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div style={{ background: "#fff", padding: "20px" }} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body // <- rendered directly under <body>, not inside this component's parent div
  );
};

const PortalsExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ overflow: "hidden" }}>
      <button onClick={() => setShowModal(true)}>Open modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>I'm rendered into document.body via a portal.</p>
        </Modal>
      )}
    </div>
  );
};

export default PortalsExample;
