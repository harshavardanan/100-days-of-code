# Two Pointers

## What is the Two Pointers Technique?
Two Pointers uses two index variables that move through the data structure — either toward each other (opposite ends) or in the same direction. It avoids nested loops, reducing O(n²) solutions to O(n).

## Two Variants

### Opposite Direction (meet in the middle)
Both pointers start at opposite ends and converge.
```python
left, right = 0, len(arr) - 1
while left < right:
    if <condition met>:
        # process
        left += 1
        right -= 1
    elif <too small>:
        left += 1
    else:
        right -= 1
```

### Same Direction (fast & slow)
Both pointers move forward; one leads the other.
```python
slow = 0
for fast in range(len(arr)):
    if <condition>:
        arr[slow] = arr[fast]
        slow += 1
```

## Core Operations

| Step | Action | Time |
|------|--------|------|
| Initialize | Set left = 0, right = n-1 | O(1) |
| Move pointer | left += 1 or right -= 1 | O(1) |
| Full traversal | At most n steps total | O(n) |

> Most two-pointer problems require a **sorted array** for the opposite-direction variant.

## Python — Common Setup
```python
arr.sort()  # usually required first

left, right = 0, len(arr) - 1
while left < right:
    total = arr[left] + arr[right]
    if total == target:
        # found
    elif total < target:
        left += 1
    else:
        right -= 1
```

## Common Patterns
- **Two sum (sorted)** — find pair that sums to target
- **Three sum** — fix one element, use two pointers on the rest
- **Valid palindrome** — compare characters from both ends
- **Container with most water** — maximize area, shrink from smaller side
- **Remove duplicates** — slow pointer tracks unique position
- **Merge sorted arrays** — pointer per array, merge inward

## When to Recognise It
- Input is sorted (or can be sorted without affecting answer)
- You need pairs or triplets summing to a target
- Brute force is O(n²) — two pointers brings it to O(n) or O(n log n)
