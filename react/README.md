# React Concepts Playground

A hands-on reference for core React concepts. Every concept below has a
live, runnable example in this repo — open the file, read the comments,
then run the app and play with it in the browser.

```bash
npm install
npm run dev
```

Then open the printed local URL. Every concept is rendered as its own
card, grouped by category, with a short description and a live demo.

## Folder structure

```
src/
  hooks/         Built-in React hooks
  composition/    Patterns for composing components together
  performance/    Techniques for avoiding unnecessary work
  forms/          Controlled vs uncontrolled inputs
  patterns/       Other common patterns (custom hooks, error boundaries, etc.)
```

Each file exports one self-contained component demonstrating one
concept, and is wired into `App.jsx` so you can see it running.

---

## Hooks (`src/hooks/`)

### `useState` — [UseState.jsx](src/hooks/UseState.jsx)
Lets a component hold a piece of state that persists between renders.
Calling the setter schedules a re-render with the new value.

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Add</button>
```

### `useRef` — [UseRef.jsx](src/hooks/UseRef.jsx)
Holds a mutable value (often a DOM node) that survives across renders,
but changing it does **not** trigger a re-render — unlike `useState`.
Commonly used to grab a reference to a DOM element (e.g. to call
`.focus()`) or to store a value you need but don't want to display.

```jsx
const inputRef = useRef(null);
useEffect(() => inputRef.current.focus(), []);
<input ref={inputRef} />
```

### `useEffect` — [UseEffect.jsx](src/hooks/UseEffect.jsx)
Runs a "side effect" (anything that reaches outside of rendering:
fetching data, subscriptions, timers, updating `document.title`) after
React has painted the component. The dependency array controls when it
re-runs; an optional returned function cleans up before the next run
or on unmount.

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // only re-runs when count changes
```

### `useContext` — [UseContext.jsx](src/hooks/UseContext.jsx)
Reads a value provided by the nearest `<SomeContext.Provider>` above it
in the tree, without needing that value passed down as a prop through
every intermediate component ("prop drilling").

```jsx
const ThemeContext = createContext("light");
const theme = useContext(ThemeContext);
```

### `useReducer` — [UseReducer.jsx](src/hooks/UseReducer.jsx)
An alternative to `useState` for state that changes via well-defined
"actions" — better when updates are more complex or several pieces of
state change together.

```jsx
const reducer = (state, action) =>
  action.type === "increment" ? { count: state.count + 1 } : state;
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "increment" });
```

### `useMemo` — [UseMemo.jsx](src/hooks/UseMemo.jsx)
Caches the **result** of an expensive calculation and only recomputes
it when one of its dependencies changes — avoids redoing slow work on
every render.

```jsx
const square = useMemo(() => slowSquare(number), [number]);
```

### `useCallback` — [UseCallback.jsx](src/hooks/UseCallback.jsx)
Like `useMemo`, but caches a **function's identity** instead of a
value. Useful when passing callbacks to a `React.memo`-wrapped child,
so the child doesn't see "a new prop" (and re-render) on every parent
render.

```jsx
const handleClick = useCallback(() => setCount((c) => c + 1), []);
```

### `useLayoutEffect` — [UseLayoutEffect.jsx](src/hooks/UseLayoutEffect.jsx)
Fires synchronously right after React updates the DOM but **before**
the browser paints the screen — unlike `useEffect`, which fires after
paint. Use it for DOM measurements that need to be applied before the
user sees anything, to avoid a visible flicker.

```jsx
useLayoutEffect(() => {
  setWidth(boxRef.current.offsetWidth);
}, []);
```

### `useImperativeHandle` — [UseImperativeHandle.jsx](src/hooks/UseImperativeHandle.jsx)
Used together with `forwardRef` to customize exactly what a parent's
`ref` exposes when pointed at a child component, instead of exposing
the raw DOM node.

```jsx
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus(),
}));
```

### `useId` — [UseId.jsx](src/hooks/UseId.jsx)
Generates a unique, stable ID for a component instance — handy for
linking a `<label htmlFor>` to an `<input id>` without hardcoding IDs
that could collide if the component renders more than once.

```jsx
const id = useId();
<label htmlFor={id}>Email</label>
<input id={id} />
```

---

## Composition Patterns (`src/composition/`)

### Children prop — [Children.jsx](src/composition/Children.jsx)
Any component can accept nested JSX via `props.children`, so a wrapper
(like a `Card`) doesn't need to know what's inside it.

```jsx
const Card = ({ children }) => <div className="card">{children}</div>;
<Card><h3>Anything can go here</h3></Card>
```

### Render props — [RenderProps.jsx](src/composition/RenderProps.jsx)
A prop whose value is a **function that returns JSX**. The component
holding the logic (e.g. tracking mouse position) calls this function
with its data, letting the caller decide how to display it.

```jsx
<MouseTracker render={(pos) => <p>{pos.x}, {pos.y}</p>} />
```

### Compound components — [CompoundComponents.jsx](src/composition/CompoundComponents.jsx)
A group of components that share state implicitly via context, but are
composed together by the caller — like HTML's `<select>` and
`<option>`.

```jsx
<Tabs>
  <Tabs.Tab index={0}>Profile</Tabs.Tab>
  <Tabs.Panel index={0}>Profile content</Tabs.Panel>
</Tabs>
```

### Higher-order component — [HigherOrderComponent.jsx](src/composition/HigherOrderComponent.jsx)
A function that takes a component and returns a new component with
extra behavior added — a "decorator" for components. Mostly superseded
by hooks/custom hooks today, but still seen in the wild.

```jsx
const withLoading = (Component) => (props) =>
  props.isLoading ? <p>Loading...</p> : <Component {...props} />;
```

---

## Performance (`src/performance/`)

### `React.memo` — [ReactMemo.jsx](src/performance/ReactMemo.jsx)
Wraps a component so React skips re-rendering it if its props are
shallowly equal to last time — avoids wasted renders of children whose
inputs didn't actually change.

```jsx
const Child = React.memo(({ label }) => <p>{label}</p>);
```

### Keys — [Keys.jsx](src/performance/Keys.jsx)
Tells React which item in a list is which, between renders, so it can
match old DOM nodes to new ones correctly. Using array **index** as a
key is a classic bug: if the list is reordered, React matches the
wrong old node to the wrong new item.

```jsx
{items.map((item) => <li key={item.id}>{item.text}</li>)} // correct
{items.map((item, i) => <li key={i}>{item.text}</li>)}     // risky
```

### `lazy` + `Suspense` — [LazySuspense.jsx](src/performance/LazySuspense.jsx)
`lazy()` delays loading a component's code until it's actually needed,
splitting it into its own JS chunk. `<Suspense>` shows a fallback UI
while that chunk is being fetched.

```jsx
const Heavy = lazy(() => import("./Heavy"));
<Suspense fallback={<p>Loading...</p>}>
  <Heavy />
</Suspense>
```

---

## Forms (`src/forms/`)

### Controlled vs uncontrolled — [ControlledVsUncontrolled.jsx](src/forms/ControlledVsUncontrolled.jsx)
**Controlled**: React state is the source of truth for the input's
value — every keystroke flows through `onChange` → `setState`. Lets
you validate/transform on every change.
**Uncontrolled**: the DOM itself holds the value; you read it via a
`ref` only when you need it (e.g. on submit). Fewer re-renders, less
control.

```jsx
// controlled
<input value={value} onChange={(e) => setValue(e.target.value)} />

// uncontrolled
<input ref={inputRef} defaultValue="" />
// later: inputRef.current.value
```

---

## General Patterns (`src/patterns/`)

### Custom hooks — [CustomHook.jsx](src/patterns/CustomHook.jsx)
A regular function whose name starts with `use` and that calls other
hooks inside it — lets you extract and reuse stateful logic across
components instead of duplicating it.

```jsx
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
};
```

### Error boundaries — [ErrorBoundary.jsx](src/patterns/ErrorBoundary.jsx)
Catches JavaScript errors thrown while rendering anywhere in its child
tree, and shows a fallback UI instead of crashing the whole app. As of
React 19 there's still no hook equivalent — it must be a class
component.

```jsx
class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    return this.state.hasError ? <p>Something broke.</p> : this.props.children;
  }
}
```

### Portals — [Portals.jsx](src/patterns/Portals.jsx)
Renders children into a **different** DOM node (e.g. directly under
`<body>`) while keeping them in the React tree for events and context —
useful for modals/tooltips that need to escape a parent's
`overflow: hidden` or stacking context.

```jsx
createPortal(<div className="modal">...</div>, document.body);
```

### Fragments — [Fragments.jsx](src/patterns/Fragments.jsx)
A component must return a single root element. `<Fragment>` (or the
`<>...</>` shorthand) groups multiple elements without adding an extra,
real DOM node — important when the wrapper would break layouts like
tables or flex/grid that depend on direct children.

```jsx
<>
  <td>Cell A</td>
  <td>Cell B</td>
</>
```

---

## Suggested reading order

If you're new to React, go roughly in this order:

1. `useState` → `useEffect` → `useRef` (the fundamentals)
2. Controlled vs uncontrolled forms
3. Children prop → Fragments (basic composition)
4. `useContext` → `useReducer` (bigger state needs)
5. `useMemo` → `useCallback` → `React.memo` → Keys (performance, once things are slow)
6. Custom hooks → render props → compound components → HOCs (reuse patterns)
7. `useLayoutEffect` → `useImperativeHandle` → `useId` → Portals → Error boundaries → `lazy`/`Suspense` (the specialized tools you'll reach for occasionally)
