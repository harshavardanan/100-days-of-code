import React, { useState } from "react";

// Keys tell React which array item is which BETWEEN renders, so it can
// match old DOM nodes to new ones instead of re-creating everything.
// Using the array INDEX as a key is a common bug: if items are
// reordered/inserted, indices shift and React matches the wrong
// old node to the wrong new item (visible as stale input state, etc).
const KeysExample = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Walk dog" },
    { id: 3, text: "Write code" },
  ]);

  const addToFront = () => {
    const newItem = { id: Date.now(), text: "New item" };
    setItems([newItem, ...items]);
  };

  return (
    <div>
      <button onClick={addToFront}>Add item to front</button>

      <h4>Using stable id as key (correct)</h4>
      <ul>
        {items.map((item) => (
          // key={item.id} stays attached to the SAME data no matter
          // where it moves in the list.
          <li key={item.id}>
            {item.text} <input placeholder="type here to see it stick" />
          </li>
        ))}
      </ul>

      <h4>Using array index as key (buggy when reordering)</h4>
      <ul>
        {items.map((item, index) => (
          // key={index} means "position 0" keeps its identity even
          // though the ITEM at position 0 changed — type in an input
          // below, then click "Add item to front" to see it jump.
          <li key={index}>
            {item.text} <input placeholder="type here, then add to front" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeysExample;
