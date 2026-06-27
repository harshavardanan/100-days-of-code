# Trees

## What is a Tree?
A Tree is a hierarchical data structure made of **nodes**, where each node holds a value and references to child nodes. The topmost node is the **root**; nodes with no children are **leaves**.

A **Binary Tree** is the most common variant — each node has at most two children: left and right.

## Key Terminology

| Term | Meaning |
|------|---------|
| Root | Topmost node (no parent) |
| Leaf | Node with no children |
| Height | Longest path from root to a leaf |
| Depth | Distance from the root to a node |
| Subtree | A node and all its descendants |
| BST | Binary Search Tree: left < node < right |

## Building a Binary Tree
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Example: build a small tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
```

## Traversals

```python
# Inorder (Left → Root → Right) — gives sorted order in BST
def inorder(node):
    if not node:
        return
    inorder(node.left)
    print(node.val)
    inorder(node.right)

# Preorder (Root → Left → Right) — useful for copying a tree
def preorder(node):
    if not node:
        return
    print(node.val)
    preorder(node.left)
    preorder(node.right)

# Postorder (Left → Right → Root) — useful for deleting a tree
def postorder(node):
    if not node:
        return
    postorder(node.left)
    postorder(node.right)
    print(node.val)

# Level Order (BFS) — process level by level
from collections import deque
def level_order(root):
    q = deque([root])
    while q:
        node = q.popleft()
        print(node.val)
        if node.left:  q.append(node.left)
        if node.right: q.append(node.right)
```

## Binary Search Tree (BST) Operations

```python
# Search — O(log n) average
def search(node, target):
    if not node or node.val == target:
        return node
    if target < node.val:
        return search(node.left, target)
    return search(node.right, target)

# Insert — O(log n) average
def insert(node, val):
    if not node:
        return TreeNode(val)
    if val < node.val:
        node.left = insert(node.left, val)
    else:
        node.right = insert(node.right, val)
    return node
```

## Common Patterns
- **DFS (recursive)** — most tree problems; process node, recurse left, recurse right
- **BFS (queue)** — level-order problems, find shortest path in unweighted tree
- **Height/depth** — `1 + max(height(left), height(right))`
- **Diameter** — longest path through any node (left height + right height)
- **LCA** — Lowest Common Ancestor using recursion
- **Serialize/deserialize** — encode a tree to string and rebuild it
