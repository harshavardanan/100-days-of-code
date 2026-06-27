# Intervals

## What are Interval Problems?
Interval problems deal with ranges `[start, end]`. The core challenge is handling **overlaps** — detecting, merging, or inserting intervals efficiently.

## Key Concepts

| Concept | Condition |
|---------|-----------|
| Overlap | `a.start <= b.end and b.start <= a.end` |
| No overlap (a before b) | `a.end < b.start` |
| No overlap (b before a) | `b.end < a.start` |
| Merge two intervals | `[min(a.start, b.start), max(a.end, b.end)]` |

## Always Sort First
```python
intervals.sort(key=lambda x: x[0])  # sort by start time
```
Sorting by start time allows a single left-to-right pass to handle all overlaps.

## Core Patterns

### Merge Overlapping Intervals
```python
def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:          # overlaps
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged
```

### Insert an Interval
```python
def insert(intervals, new_interval):
    result = []
    for i, (start, end) in enumerate(intervals):
        if new_interval[1] < start:         # new interval ends before current
            result.append(new_interval)
            return result + intervals[i:]
        elif new_interval[0] > end:         # new interval starts after current
            result.append([start, end])
        else:                               # overlap — merge
            new_interval = [min(new_interval[0], start), max(new_interval[1], end)]
    result.append(new_interval)
    return result
```

### Meeting Rooms (can one person attend all?)
```python
def can_attend(intervals):
    intervals.sort(key=lambda x: x[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:  # overlap found
            return False
    return True
```

### Minimum Meeting Rooms (max simultaneous meetings)
```python
import heapq
def min_rooms(intervals):
    intervals.sort(key=lambda x: x[0])
    heap = []  # tracks end times of active meetings
    for start, end in intervals:
        if heap and heap[0] <= start:
            heapq.heapreplace(heap, end)
        else:
            heapq.heappush(heap, end)
    return len(heap)
```

## Common Patterns
- **Sort + sweep** — sort by start, then merge or count overlaps in one pass
- **Min-heap of end times** — track how many intervals are active at once
- **Difference array** — for range update queries in O(1) per update
- **Coordinate compression** — when interval values are very large but count is small
