# Dynamic Programming

## What is Dynamic Programming?
Dynamic Programming (DP) is an optimization technique that solves problems by breaking them into overlapping subproblems, solving each once, and storing the result to avoid redundant computation. It applies when a problem has **optimal substructure** and **overlapping subproblems**.

---

## Two Approaches

### Top-Down (Memoization)
Recursive + cache. Solve big problem by recursing into smaller ones and caching results.
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

### Space Optimized
When current state only depends on previous 1–2 values, drop the array.
```python
def dp(n):
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

---

## Core DP Concepts

| Concept | Description |
|---------|-------------|
| State | What changes between subproblems (index, capacity, remainder…) |
| Recurrence | How current state relates to smaller states |
| Base case | Smallest subproblem with a known answer |
| Memoization | Cache recursive results (top-down) |
| Tabulation | Fill array iteratively (bottom-up) |

---

## Built-in Methods Quick Reference
```python
from functools import lru_cache

# Memoization decorator (top-down)
@lru_cache(maxsize=None)
def dp(*args): ...

# Clear cache manually
dp.cache_clear()

# Manual memo with dict
memo = {}
def dp(n):
    if n in memo: return memo[n]
    memo[n] = ...
    return memo[n]

# 1D table
dp = [0] * (n + 1)

# 2D table
dp = [[0] * (cols + 1) for _ in range(rows + 1)]

# Fill with infinity (minimization problems)
dp = [float('inf')] * (n + 1)
dp[0] = 0

# Fill with negative infinity (maximization problems)
dp = [float('-inf')] * (n + 1)
dp[0] = 0
```

---

## Common DP Patterns

| Pattern | Recurrence | Example Problems |
|---------|-----------|-----------------|
| Linear DP | `dp[i] = f(dp[i-1], dp[i-2])` | Fibonacci, Climbing Stairs, House Robber |
| 0/1 Knapsack | `dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt] + val)` | 0/1 Knapsack, Subset Sum |
| Unbounded Knapsack | `dp[w] = min(dp[w], dp[w-coin] + 1)` | Coin Change, Rod Cutting |
| 2D Grid DP | `dp[i][j] = dp[i-1][j] + dp[i][j-1]` | Unique Paths, Min Path Sum |
| String DP | `dp[i][j] = f(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])` | LCS, Edit Distance |
| Interval DP | `dp[i][j] = min over k of dp[i][k] + dp[k][j]` | Burst Balloons, Matrix Chain |

---

## Common Patterns
- **Linear** — each state depends on 1 or 2 previous states
- **Knapsack** — include or exclude an item at each step
- **Grid** — move through a 2D grid, sum paths from above and left
- **String** — match or transform characters, compare two strings
- **Interval** — split a range at each possible midpoint

---

## Interview Tips
- Start with brute force recursion, identify repeated subproblems, then add memoization
- State definition is the hardest part — think "what do I need to know at each step?"
- If top-down is clear but slow, convert to bottom-up by reversing the recursion order
- Keywords: *minimum*, *maximum*, *how many ways*, *longest*, *can you reach* — all signal DP
