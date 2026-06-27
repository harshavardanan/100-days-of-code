# Trees

## What is a Tree?
A Tree is a hierarchical data structure made of **nodes**, where each node holds a value and references to child nodes. The topmost node is the **root**; nodes with no children are **leaves**.

A **Binary Tree** is the most common variant — each node has at most two children: left and right.

---

## Key Terminology

| Term | Meaning |
|------|---------|
| Root | Topmost node (no parent) |
| Leaf | Node with no children |
| Height | Longest path from root to a leaf |
| Depth | Distance from the root to a node |
| Subtree | A node and all its descendants |
| BST | Binary Search Tree: left < node < right |
| Balanced | Height difference between left and right subtrees ≤ 1 |

---

## Building a Binary Tree
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
```

---

## Traversals

| Traversal | Order | Use Case |
|-----------|-------|----------|
| Inorder | Left → Root → Right | Sorted output from BST |
| Preorder | Root → Left → Right | Copy / serialize a tree |
| Postorder | Left → Right → Root | Delete a tree, compute subtree values |
| Level Order | Level by level (BFS) | Shortest path, level-based problems |

```python
# Inorder — recursive
def inorder(node):
    if not node: return
    inorder(node.left)
    print(node.val)
    inorder(node.right)

# Preorder — recursive
def preorder(node):
    if not node: return
    print(node.val)
    preorder(node.left)
    preorder(node.right)

# Postorder — recursive
def postorder(node):
    if not node: return
    postorder(node.left)
    postorder(node.right)
    print(node.val)

# Level Order — BFS with deque
from collections import deque
def level_order(root):
    if not root: return []
    q, result = deque([root]), []
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result
```

---

## Built-in Methods Quick Reference
```python
from collections import deque

# DFS — recursive template
def dfs(node):
    if not node:
        return <base_case>
    left  = dfs(node.left)
    right = dfs(node.right)
    return <combine left, right, node.val>

# BFS — iterative with queue
q = deque([root])
while q:
    node = q.popleft()
    if node.left:  q.append(node.left)
    if node.right: q.append(node.right)

# Height of tree
def height(node):
    if not node: return 0
    return 1 + max(height(node.left), height(node.right))

# Count nodes
def count(node):
    if not node: return 0
    return 1 + count(node.left) + count(node.right)

# Check if leaf
def is_leaf(node):
    return node and not node.left and not node.right
```

---

## BST Operations
```python
# Search — O(log n) average
def search(node, target):
    if not node or node.val == target: return node
    return search(node.left, target) if target < node.val else search(node.right, target)

# Insert — O(log n) average
def insert(node, val):
    if not node: return TreeNode(val)
    if val < node.val: node.left  = insert(node.left, val)
    else:              node.right = insert(node.right, val)
    return node

# Validate BST
def is_valid_bst(node, lo=float('-inf'), hi=float('inf')):
    if not node: return True
    if not (lo < node.val < hi): return False
    return is_valid_bst(node.left, lo, node.val) and is_valid_bst(node.right, node.val, hi)
```

---

## Common Patterns
- **DFS (recursive)** — most tree problems; base case on `None`, combine left + right results
- **BFS (queue)** — level-order problems, find shortest path
- **Height/depth** — `1 + max(height(left), height(right))`
- **Diameter** — `height(left) + height(right)` at each node, track global max
- **LCA** — Lowest Common Ancestor: recurse, return node when both subtrees find a target
- **Path sum** — carry a running sum down via recursion

---

## Interview Tips
- Always handle `if not node: return` as your base case
- For BST problems, leverage the left < node < right property to cut search space in half
- DFS returns values bottom-up — postorder thinking fits most subtree problems
- Level order (BFS) is the go-to for anything involving "level", "depth", or "shortest"
