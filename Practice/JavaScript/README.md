# JavaScript Concepts

## Core Concepts Covered

---

## var / let / const

| | `var` | `let` | `const` |
|-|-------|-------|---------|
| Scope | Function | Block | Block |
| Hoisted | Yes (as `undefined`) | Yes (TDZ*) | Yes (TDZ*) |
| Re-declare | Yes | No | No |
| Re-assign | Yes | Yes | No |

*TDZ = Temporal Dead Zone — declared but not accessible until the line of declaration.

```javascript
var x = 1;    // function-scoped, can leak out of if/for blocks
let y = 2;    // block-scoped, preferred for variables that change
const z = 3;  // block-scoped, preferred for values that don't change
```

> **Rule of thumb:** Use `const` by default. Use `let` when you need to reassign. Avoid `var`.

---

## Hoisting

JavaScript moves **declarations** (not initializations) to the top of their scope before execution.

```javascript
console.log(a);  // undefined  (var is hoisted, but not the value)
var a = 5;

console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 5;

greet();         // works! — function declarations are fully hoisted
function greet() { console.log("hello"); }

sayBye();        // TypeError — arrow functions / expressions are NOT hoisted
const sayBye = () => console.log("bye");
```

**What gets hoisted:**
- `var` declarations → hoisted as `undefined`
- Function declarations → fully hoisted (name + body)
- `let` / `const` → hoisted but in TDZ (error if accessed early)
- Function expressions / arrow functions → not hoisted

---

## Closures

A closure is a function that **remembers** the variables from its outer scope even after that scope has finished executing.

```javascript
function makeCounter() {
    let count = 0;           // lives in the outer scope
    return function() {
        count++;             // inner function closes over `count`
        return count;
    };
}

const counter = makeCounter();
counter();  // 1
counter();  // 2
counter();  // 3
// `count` is preserved between calls
```

**Why closures matter:**
- **Data privacy** — variables can't be accessed from outside
- **Factory functions** — create customized functions
- **Callbacks & async** — maintain state across async operations
- **Memoization** — cache results using a closed-over object

```javascript
// Classic closure bug with var in loops
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);  // prints 3, 3, 3
}

// Fix with let (block-scoped per iteration)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);  // prints 0, 1, 2
}
```

---

## Common Patterns
- Use `const` + `let` over `var` to avoid hoisting surprises and scope leaks
- Use closures to create private state without classes
- Understand the event loop — closures captured in async callbacks reflect values at call time, not at definition time
