# Sliding Window

## What is the Sliding Window Technique?
Sliding Window is a technique for solving problems on contiguous subarrays or substrings. Instead of recomputing from scratch each time, you maintain a window (a range defined by two pointers) and slide it across the input — adding one element on the right and optionally removing one on the left.

---

## Two Types

### Fixed-size Window
Window size `k` stays constant. Slide by moving both pointers together.
```python
left = 0
window_sum = sum(arr[:k])

for right in range(k, len(arr)):
    window_sum += arr[right] - arr[left]   # add right, remove left
    left += 1
    # use window_sum here
```

### Variable-size Window
Window grows and shrinks based on a condition.
```python
left = 0

for right in range(len(arr)):
    # expand: add arr[right] to window

    while <window is invalid>:
        # shrink: remove arr[left] from window
        left += 1

    # window [left..right] is valid — record result
```

---

## Core Operations

| Step | Action | Time |
|------|--------|------|
| Expand window | Move `right` pointer right | O(1) |
| Shrink window | Move `left` pointer right | O(1) |
| Full pass | Single traversal of input | O(n) |
| Overall | O(n) — each element enters and exits the window once | O(n) |

---

## Built-in Methods Quick Reference
```python
from collections import defaultdict, Counter

# Track frequency inside window
freq = defaultdict(int)
freq[c] += 1              # add element to window
freq[c] -= 1              # remove element from window
if freq[c] == 0:
    del freq[c]           # clean up zero entries

# Check window validity
len(freq) <= k            # at most k distinct elements
freq[c] == 0              # element no longer in window

# Counter for static window comparison
Counter(s[l:r]) == Counter(target)

# Max/min of current window (use deque for O(1))
from collections import deque
dq = deque()              # monotonic deque for sliding window max
```

---

## Monotonic Deque (Sliding Window Maximum)
```python
from collections import deque

def sliding_window_max(arr, k):
    dq = deque()          # stores indices, decreasing order of values
    result = []

    for i, val in enumerate(arr):
        while dq and arr[dq[-1]] < val:
            dq.pop()
        dq.append(i)

        if dq[0] < i - k + 1:   # remove elements outside window
            dq.popleft()

        if i >= k - 1:
            result.append(arr[dq[0]])
    return result
```

---

## Common Patterns
- **Fixed window sum/average** — sum or average of every k-element subarray
- **Longest substring with constraint** — longest without repeating chars, at most k distinct
- **Minimum window** — smallest window containing all target characters
- **Max profit** — best time to buy and sell (track min price seen so far)
- **Character replacement** — longest substring after at most k replacements
- **Sliding window maximum** — max value in every k-size window using monotonic deque

---

## Interview Tips
- Start with brute force O(n²), then ask: "can I avoid recomputing by maintaining a running state?"
- Keywords that signal sliding window: *longest*, *shortest*, *maximum sum*, *contiguous*, *substring/subarray*
- Use `defaultdict(int)` to track window contents — cleaner than regular dict
- For sliding window max/min in O(n), always use a monotonic deque
