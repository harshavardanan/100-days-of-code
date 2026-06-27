# Sliding Window

## What is the Sliding Window Technique?
Sliding Window is a technique for solving problems on contiguous subarrays or substrings. Instead of recomputing from scratch each time, you maintain a window (a range defined by two pointers) and slide it across the input — adding one element on the right and optionally removing one on the left.

## Two Types

### Fixed-size Window
The window size `k` stays constant. Slide by moving both left and right pointers together.
```python
def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum
```

### Variable-size Window
The window grows and shrinks based on a condition. Use when you need the longest/shortest subarray meeting some constraint.
```python
def longest_subarray_with_condition(arr):
    left = 0
    result = 0
    window_state = ...  # track what's inside the window

    for right in range(len(arr)):
        # expand: include arr[right] in window_state

        while <window is invalid>:
            # shrink: remove arr[left] from window_state
            left += 1

        result = max(result, right - left + 1)
    return result
```

## Core Operations

| Step | Action | Time |
|------|--------|------|
| Expand window | Move `right` pointer | O(1) |
| Shrink window | Move `left` pointer | O(1) |
| Full pass | One traversal of input | O(n) |

## Python — Useful Tools Inside a Window
```python
from collections import defaultdict

freq = defaultdict(int)   # character/element frequency in window
freq[c] += 1              # add to window
freq[c] -= 1              # remove from window
if freq[c] == 0:
    del freq[c]           # clean up zero entries
```

## Common Patterns
- **Fixed window sum/average** — sum or average of every k-element subarray
- **Longest substring with constraint** — longest without repeating chars, at most k distinct chars
- **Minimum window** — smallest window containing all target characters
- **Max profit** — best time to buy and sell (expanding max, shrinking min)
- **Character replacement** — longest substring after at most k replacements

## When to Recognise It
- Problem asks for a **subarray** or **substring**
- Keywords: longest, shortest, maximum, minimum, contiguous
- Brute force would be O(n²) — sliding window brings it to O(n)
