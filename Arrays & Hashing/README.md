# Arrays & Hashing

## What is an Array?
An Array (or list in Python) is an ordered collection of elements stored at contiguous memory locations. It allows fast access by index.

## What is Hashing?
Hashing maps data to a fixed-size value (hash) using a hash function. A **Hash Map** (dictionary) gives O(1) average-time lookups, inserts, and deletes by using keys instead of indices.

## Core Operations

### Array
| Operation | Method (Python) | Time Complexity |
|-----------|----------------|-----------------|
| Access by index | `arr[i]` | O(1) |
| Append | `arr.append(x)` | O(1) amortized |
| Insert at index | `arr.insert(i, x)` | O(n) |
| Delete by index | `arr.pop(i)` | O(n) |
| Search | `x in arr` | O(n) |

### Hash Map (dict)
| Operation | Method (Python) | Time Complexity |
|-----------|----------------|-----------------|
| Insert | `d[key] = val` | O(1) avg |
| Lookup | `d[key]` | O(1) avg |
| Delete | `del d[key]` | O(1) avg |
| Check key | `key in d` | O(1) avg |

## Python — Common Hash Map Patterns
```python
# frequency count
freq = {}
for x in arr:
    freq[x] = freq.get(x, 0) + 1

# defaultdict shortcut
from collections import defaultdict
freq = defaultdict(int)
for x in arr:
    freq[x] += 1

# Counter (fastest for frequency)
from collections import Counter
freq = Counter(arr)

# set for O(1) membership checks
seen = set()
seen.add(x)
x in seen  # O(1)
```

## Building a Hash Table from Scratch
```python
class HashTable:
    def __init__(self, size=100):
        self.table = [[] for _ in range(size)]

    def _hash(self, key):
        return hash(key) % len(self.table)

    def set(self, key, val):
        bucket = self.table[self._hash(key)]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, val)
                return
        bucket.append((key, val))

    def get(self, key):
        for k, v in self.table[self._hash(key)]:
            if k == key:
                return v
        return None
```

## Common Patterns
- **Frequency map** — count occurrences, find duplicates, top-k elements
- **Two-pass hash** — store values in first pass, look them up in second
- **Complement lookup** — store `target - x` to find pairs in O(n) (two sum)
- **Grouping** — group items by a computed key (e.g., sorted word → anagram group)
- **Prefix sums + hash map** — subarray sum problems
