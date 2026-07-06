import React, { createContext, useContext, useState } from "react";

// Compound components are a group of components that share implicit
// state via context, but are composed together in JSX by the parent —
// like <select> and <option> in plain HTML. This gives the CALLER
// control over layout/order while the components share logic internally.
const TabsContext = createContext(null);

const Tabs = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  // Every Tab/TabPanel below reads/writes this same shared state via context.
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }) => (
  <div style={{ display: "flex", gap: "8px" }}>{children}</div>
);

const Tab = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;
  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </button>
  );
};

const TabPanel = ({ index, children }) => {
  const { activeIndex } = useContext(TabsContext);
  // Only render this panel's content when it's the active tab.
  return activeIndex === index ? <div>{children}</div> : null;
};

// Attaching subcomponents as properties (Tabs.List, Tabs.Tab, ...)
// is a common convention to show "these belong together".
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

const CompoundComponentsExample = () => {
  return (
    <Tabs defaultIndex={0}>
      <Tabs.List>
        <Tabs.Tab index={0}>Profile</Tabs.Tab>
        <Tabs.Tab index={1}>Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel index={0}>Profile content here.</Tabs.Panel>
      <Tabs.Panel index={1}>Settings content here.</Tabs.Panel>
    </Tabs>
  );
};

export default CompoundComponentsExample;
