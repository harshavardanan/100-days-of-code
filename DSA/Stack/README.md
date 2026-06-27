# Stack

## What is a Stack?
A Stack is a linear data structure that follows **LIFO** — Last In, First Out. Think of a stack of plates: you add to the top and remove from the top.

## Core Operations

| Operation | Method (Python) | Time Complexity |
|-----------|----------------|-----------------|
| Push (add) | `stack.append(x)` | O(1) |
| Pop (remove top) | `stack.pop()` | O(1) |
| Peek (view top) | `stack[-1]` | O(1) |
| Is empty | `len(stack) == 0` | O(1) |

## Python — Using a List as a Stack
```python
stack = []

stack.append(1)   # push → [1]
stack.append(2)   # push → [1, 2]
stack.append(3)   # push → [1, 2, 3]

stack[-1]         # peek → 3
stack.pop()       # pop  → returns 3, stack = [1, 2]
```

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

## Common Patterns
- **Matching pairs** — valid parentheses, XML tags
- **Undo/redo** — push actions, pop to undo
- **Monotonic stack** — track next greater/smaller element
- **DFS** — iterative depth-first search uses an explicit stack
