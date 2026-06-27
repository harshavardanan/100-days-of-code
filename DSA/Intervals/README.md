# Intervals

## What are Interval Problems?
Interval problems deal with ranges `[start, end]`. The core challenge is handling **overlaps** — detecting, merging, or inserting intervals efficiently.

---

## Core Concepts

| Concept | Condition |
|---------|-----------|
| Overlap | `a[0] <= b[1] and b[0] <= a[1]` |
| No overlap (a before b) | `a[1] < b[0]` |
| No overlap (b before a) | `b[1] < a[0]` |
| Merge two intervals | `[min(a[0], b[0]), max(a[1], b[1])]` |

---

## Always Sort First
```python
intervals.sort(key=lambda x: x[0])   # sort by start time — O(n log n)
```
Sorting by start time enables a single O(n) sweep to handle all overlaps.

---

## Built-in Methods Quick Reference
```python
import heapq

# Sort intervals
intervals.sort(key=lambda x: x[0])        # by start
intervals.sort(key=lambda x: x[1])        # by end

# Heap for tracking end times (meeting rooms)
heapq.heappush(heap, end)                 # push
heapq.heappop(heap)                       # pop smallest
heapq.heapreplace(heap, new_val)          # pop + push in one step
heap[0]                                   # peek min end time

# Unpack interval
start, end = interval
for start, end in intervals:
    pass
```

---

## Common Templates

### Merge Overlapping Intervals
```python
intervals.sort(key=lambda x: x[0])
merged = [intervals[0]]

for start, end in intervals[1:]:
    if start <= merged[-1][1]:                        # overlaps
        merged[-1][1] = max(merged[-1][1], end)
    else:
        merged.append([start, end])
```

### Check if Person Can Attend All Meetings
```python
intervals.sort(key=lambda x: x[0])
for i in range(1, len(intervals)):
    if intervals[i][0] < intervals[i-1][1]:
        return False
return True
```

### Minimum Meeting Rooms Needed
```python
import heapq
intervals.sort(key=lambda x: x[0])
heap = []   # tracks end times of active meetings

for start, end in intervals:
    if heap and heap[0] <= start:
        heapq.heapreplace(heap, end)
    else:
        heapq.heappush(heap, end)

return len(heap)
```

---

## Common Patterns
- **Sort + sweep** — sort by start, merge or count overlaps in one pass
- **Min-heap of end times** — track how many intervals are active simultaneously
- **Difference array** — range update in O(1), query prefix sum for counts
- **Coordinate compression** — when values are large but count is small

---

## Interview Tips
- Almost every interval problem starts with **sort by start time**
- Use a min-heap keyed by end time to efficiently find which intervals have finished
- Overlap condition: `max(start1, start2) < min(end1, end2)`
- For insert problems, handle three cases: before new interval, after new interval, overlapping
