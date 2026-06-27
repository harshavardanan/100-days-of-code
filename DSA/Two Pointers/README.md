# Two Pointers

## What is the Two Pointers Technique?
Two Pointers uses two index variables that move through the data — either toward each other (opposite ends) or in the same direction. It avoids nested loops, reducing O(n²) brute force to O(n).

---

## Two Variants

### Opposite Direction (converging)
Both pointers start at opposite ends and move toward each other.
```python
left, right = 0, len(arr) - 1

while left < right:
    if <condition met>:
        left += 1
        right -= 1
    elif <need larger sum>:
        left += 1
    else:
        right -= 1
```

### Same Direction (fast & slow)
Both pointers move forward; one tracks a position, the other scans ahead.
```python
slow = 0
for fast in range(len(arr)):
    if <condition>:
        arr[slow] = arr[fast]
        slow += 1
```

---

## Core Operations

| Step | Action | Time |
|------|--------|------|
| Initialize | `left = 0`, `right = n - 1` | O(1) |
| Move pointer | `left += 1` or `right -= 1` | O(1) |
| Full traversal | At most n steps total | O(n) |
| Sort first (if needed) | `arr.sort()` | O(n log n) |

> Most opposite-direction problems require the array to be **sorted** first.

---

## Built-in Methods Quick Reference
```python
arr.sort()                     # sort in place — O(n log n)
sorted(arr)                    # new sorted list
arr.sort(key=lambda x: x[0])   # sort by custom key

# Pointer movement
left += 1
right -= 1

# Skip duplicates (common in 3Sum / k-Sum)
while left < right and arr[left] == arr[left - 1]:
    left += 1
while left < right and arr[right] == arr[right + 1]:
    right -= 1

# String two pointers (convert to list for in-place)
s = list(s)
left, right = 0, len(s) - 1
s[left], s[right] = s[right], s[left]
```

---

## Common Patterns
- **Two Sum (sorted)** — find pair summing to target, converge from both ends
- **Three Sum** — fix one element, use two pointers on the rest; sort first
- **Valid Palindrome** — compare characters from both ends
- **Container with Most Water** — maximize area, always shrink the shorter side
- **Remove Duplicates** — slow pointer marks the write position
- **Merge Sorted Arrays** — one pointer per array, fill from the back

---

## Interview Tips
- Always sort first if the problem involves finding pairs/triplets that sum to a target
- Skip duplicates explicitly to avoid duplicate results in 3Sum-style problems
- The key insight: if the current sum is too small, move left forward; too large, move right back
- Two pointers works on strings too — treat them as character arrays
