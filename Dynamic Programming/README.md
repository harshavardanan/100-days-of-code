# Dynamic Programming

## What is Dynamic Programming?
Dynamic Programming (DP) is an optimization technique that solves problems by breaking them into overlapping subproblems, solving each once, and storing the result to avoid redundant computation. It applies when a problem has **optimal substructure** and **overlapping subproblems**.

## Two Approaches

### Top-Down (Memoization)
Recursive + cache. Solve the big problem by recursing into smaller ones and storing results.
```python
from functools import lru_cache

@lru_cache(maxsize=None)
def dp(n):
    if n <= 1:
        return n
    return dp(n - 1) + dp(n - 2)
```

### Bottom-Up (Tabulation)
Iterative. Fill a table from the smallest subproblem up to the answer.
```python
def dp(n):
    table = [0] * (n + 1)
    table[1] = 1
    for i in range(2, n + 1):
        table[i] = table[i - 1] + table[i - 2]
    return table[n]
```

## Space Optimization
Many 1D DP problems only need the previous one or two values — drop the array entirely.
```python
def dp(n):
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

## Core Operations

| Concept | Description |
|---------|-------------|
| State | What changes between subproblems (e.g., index, remaining capacity) |
| Recurrence | How the current state relates to smaller states |
| Base case | The smallest subproblem with a known answer |
| Direction | Top-down (recursive) or bottom-up (iterative) |

## Common Patterns

| Pattern | Example Problems |
|---------|-----------------|
| Linear DP | Fibonacci, Climbing Stairs, House Robber |
| Knapsack (0/1) | Coin Change, Subset Sum, Target Sum |
| Unbounded Knapsack | Coin Change (unlimited coins), Rod Cutting |
| Interval DP | Burst Balloons, Matrix Chain Multiplication |
| 2D DP | Unique Paths, Longest Common Subsequence |
| String DP | Edit Distance, Palindrome Partitioning |

## Recognizing DP Problems
- "How many ways…", "minimum cost…", "maximum profit…"
- Choices at each step that affect future choices
- Brute force involves recursion with repeated subproblems
