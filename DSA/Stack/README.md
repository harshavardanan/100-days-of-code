# Stack

## What is a Stack?
A Stack is a linear data structure that follows **LIFO** — Last In, First Out. Think of a stack of plates: you add to the top and remove from the top.

---

## Core Operations

| Operation | Method (Python) | Time Complexity |
|-----------|----------------|-----------------|
| Push (add) | `stack.append(x)` | O(1) |
| Pop (remove top) | `stack.pop()` | O(1) |
| Peek (view top) | `stack[-1]` | O(1) |
| Is empty | `not stack` | O(1) |
| Size | `len(stack)` | O(1) |
| Search | linear scan | O(n) |

---

## Python — Using a List as a Stack
```python
stack = []

stack.append(1)       # push → [1]
stack.append(2)       # push → [1, 2]
stack.append(3)       # push → [1, 2, 3]

stack[-1]             # peek → 3
stack.pop()           # pop  → returns 3, stack = [1, 2]
not stack             # is empty → False
len(stack)            # size → 2
```

---

## Python — Using deque (Faster Alternative)
`collections.deque` is preferred for performance-critical code — O(1) guaranteed, no memory reallocation.
```python
from collections import deque

stack = deque()
stack.append(x)       # push
stack.pop()           # pop
stack[-1]             # peek
not stack             # is empty
len(stack)            # size
```

---

## Built-in Methods Quick Reference

| Method | Description | Returns |
|--------|-------------|---------|
| `stack.append(x)` | Push x onto the top | None |
| `stack.pop()` | Remove and return top element | value |
| `stack[-1]` | View top without removing | value |
| `stack.clear()` | Remove all elements | None |
| `stack.copy()` | Shallow copy of the stack | list |
| `len(stack)` | Number of elements | int |
| `not stack` | True if empty | bool |
| `x in stack` | Check if x exists (O(n)) | bool |
| `stack.count(x)` | Count occurrences of x | int |

---

## Building a Stack from Scratch
```python
class Stack:
    def __init__(self):
        self.data = []

    def push(self, val):
        self.data.append(val)

    def pop(self):
        if not self.is_empty():
            return self.data.pop()

    def peek(self):
        return self.data[-1] if not self.is_empty() else None

    def is_empty(self):
        return len(self.data) == 0

    def size(self):
        return len(self.data)
```

---

## Common Patterns
- **Matching pairs** — valid parentheses, XML tags
- **Undo/redo** — push actions, pop to undo
- **Monotonic stack** — track next greater/smaller element
- **DFS** — iterative depth-first search uses an explicit stack
- **Min/Max stack** — second stack tracks running min or max

---

## Interview Tips
- Always check `if stack` before `.pop()` or `stack[-1]` to avoid `IndexError`
- When you see nested structures (brackets, tags, directories) — think stack
- Monotonic stack problems: "next greater element", "largest rectangle", "trapping rain water"
