import React from "react";

// Hooks
import UseState from "./hooks/UseState";
import UseRef from "./hooks/UseRef";
import UseEffect from "./hooks/UseEffect";
import UseContext from "./hooks/UseContext";
import UseReducer from "./hooks/UseReducer";
import UseMemo from "./hooks/UseMemo";
import UseCallback from "./hooks/UseCallback";
import UseLayoutEffect from "./hooks/UseLayoutEffect";
import UseImperativeHandle from "./hooks/UseImperativeHandle";
import UseId from "./hooks/UseId";

// Composition patterns
import ChildrenExample from "./composition/Children";
import RenderPropsExample from "./composition/RenderProps";
import CompoundComponentsExample from "./composition/CompoundComponents";
import HigherOrderComponentExample from "./composition/HigherOrderComponent";

// Performance concepts
import ReactMemoExample from "./performance/ReactMemo";
import KeysExample from "./performance/Keys";
import LazySuspenseExample from "./performance/LazySuspense";

// Forms
import ControlledVsUncontrolledExample from "./forms/ControlledVsUncontrolled";

// General patterns
import CustomHookExample from "./patterns/CustomHook";
import ErrorBoundaryExample from "./patterns/ErrorBoundary";
import PortalsExample from "./patterns/Portals";
import FragmentsExample from "./patterns/Fragments";

// Each item carries a plain-English "what/why" so the concept reads
// clearly on the page itself, not just in the source code comments.
const sections = [
  {
    title: "Hooks",
    items: [
      { name: "useState", description: "Lets a component remember a value between renders and re-render when it changes.", Component: UseState },
      { name: "useRef", description: "Holds a mutable value (or a DOM node) that persists across renders WITHOUT causing a re-render when it changes.", Component: UseRef },
      { name: "useEffect", description: "Runs side effects after render (data fetching, subscriptions, DOM tweaks), re-running only when its dependencies change.", Component: UseEffect },
      { name: "useContext", description: "Reads a value from a Provider higher in the tree, skipping the need to pass props down through every level.", Component: UseContext },
      { name: "useReducer", description: "Manages state via a (state, action) => newState function — better than useState for related, complex updates.", Component: UseReducer },
      { name: "useMemo", description: "Caches the RESULT of an expensive calculation, only recomputing it when its dependencies change.", Component: UseMemo },
      { name: "useCallback", description: "Caches a FUNCTION's identity between renders, so children wrapped in React.memo don't re-render needlessly.", Component: UseCallback },
      { name: "useLayoutEffect", description: "Like useEffect, but fires synchronously before the browser paints — for DOM measurements that must not flicker.", Component: UseLayoutEffect },
      { name: "useImperativeHandle", description: "Customizes what a parent's ref actually exposes when pointed at a child component (used with forwardRef).", Component: UseImperativeHandle },
      { name: "useId", description: "Generates a unique, stable id per component instance — handy for linking labels to inputs.", Component: UseId },
    ],
  },
  {
    title: "Composition Patterns",
    items: [
      { name: "children prop", description: "Components can accept arbitrary nested JSX via props.children, so wrappers don't need to know what's inside them.", Component: ChildrenExample },
      { name: "render props", description: "A prop whose value is a function returning JSX — lets one piece of logic drive many different visual outputs.", Component: RenderPropsExample },
      { name: "compound components", description: "Multiple components sharing implicit state via context, composed together by the caller (like <select>/<option>).", Component: CompoundComponentsExample },
      { name: "higher-order component", description: "A function that takes a component and returns a new one with extra behavior added — a decorator for components.", Component: HigherOrderComponentExample },
    ],
  },
  {
    title: "Performance",
    items: [
      { name: "React.memo", description: "Skips re-rendering a component if its props haven't shallowly changed since the last render.", Component: ReactMemoExample },
      { name: "keys", description: "Tells React which list item is which between renders, so it matches DOM nodes correctly instead of guessing by position.", Component: KeysExample },
      { name: "lazy + Suspense", description: "Defers loading a component's code until it's needed, showing a fallback UI while it loads.", Component: LazySuspenseExample },
    ],
  },
  {
    title: "Forms",
    items: [
      { name: "controlled vs uncontrolled", description: "Controlled inputs store their value in React state; uncontrolled inputs let the DOM hold it and you read it via a ref.", Component: ControlledVsUncontrolledExample },
    ],
  },
  {
    title: "General Patterns",
    items: [
      { name: "custom hook", description: "A reusable function (starting with 'use') that extracts stateful logic shared across components.", Component: CustomHookExample },
      { name: "error boundary", description: "A class component that catches render errors in its child tree and shows a fallback instead of crashing.", Component: ErrorBoundaryExample },
      { name: "portals", description: "Renders children into a different DOM node (e.g. document.body) while keeping them in the React tree for events/context.", Component: PortalsExample },
      { name: "fragments", description: "Groups multiple elements under one return without adding an extra, layout-breaking DOM node.", Component: FragmentsExample },
    ],
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>React Concepts Playground</h1>

      {sections.map((section) => (
        <section className="concept-section" key={section.title}>
          <h2>{section.title}</h2>
          <div className="concept-grid">
            {section.items.map(({ name, description, Component }) => (
              <div className="concept-card" key={name}>
                <h3>{name}</h3>
                <p className="concept-desc">{description}</p>
                <div className="concept-card-body">
                  <Component />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default App;
