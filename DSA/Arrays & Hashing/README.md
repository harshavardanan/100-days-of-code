# Arrays & Hashing

## What is an Array?
An Array (or list in Python) is an ordered collection of elements stored at contiguous memory locations. It allows fast access by index.

## What is Hashing?
Hashing maps data to a fixed-size value (hash) using a hash function. A **Hash Map** (dictionary) gives O(1) average-time lookups, inserts, and deletes by using keys instead of indices.

---

## Core Operations

### Array (list)
| Operation | Method (Python) | Time Complexity |
|-----------|----------------|-----------------|
| Access | `arr[i]` | O(1) |
| Append | `arr.append(x)` | O(1) amortized |
| Insert at index | `arr.insert(i, x)` | O(n) |
| Remove by value | `arr.remove(x)` | O(n) |
| Delete by index | `arr.pop(i)` | O(n) |
| Pop last | `arr.pop()` | O(1) |
| Search | `x in arr` | O(n) |
| Length | `len(arr)` | O(1) |
| Reverse | `arr.reverse()` | O(n) |
| Sort | `arr.sort()` | O(n log n) |
| Slice | `arr[l:r]` | O(r - l) |

### Hash Map (dict)
| Operation | Method (Python) | Time Complexity |
|-----------|----------------|-----------------|
| Insert | `d[key] = val` | O(1) avg |
| Lookup | `d[key]` | O(1) avg |
| Safe lookup | `d.get(key, default)` | O(1) avg |
| Delete | `del d[key]` | O(1) avg |
| Check key | `key in d` | O(1) avg |
| All keys | `d.keys()` | O(1) |
| All values | `d.values()` | O(1) |
| All pairs | `d.items()` | O(1) |

### Hash Set (set)
| Operation | Method (Python) | Time Complexity |
|-----------|----------------|-----------------|
| Add | `s.add(x)` | O(1) avg |
| Remove | `s.remove(x)` | O(1) avg |
| Check membership | `x in s` | O(1) avg |
| Intersection | `s1 & s2` | O(min(n,m)) |
| Union | `s1 \| s2` | O(n + m) |

---

## Built-in Methods Quick Reference

### List
```python
arr.append(x)         # add to end
arr.pop()             # remove last
arr.pop(i)            # remove at index i
arr.insert(i, x)      # insert at index i
arr.remove(x)         # remove first occurrence of x
arr.index(x)          # index of first occurrence
arr.count(x)          # count occurrences
arr.sort()            # sort in place
arr.sort(reverse=True)# sort descending
arr.reverse()         # reverse in place
arr.copy()            # shallow copy
arr.clear()           # remove all
sorted(arr)           # returns new sorted list
len(arr)              # length
sum(arr)              # sum of elements
min(arr), max(arr)    # min and max
```

### Dict
```python
d.get(key)            # None if missing
d.get(key, default)   # default if missing
d.setdefault(key, 0)  # set if key missing, return value
d.update({k: v})      # merge another dict
d.pop(key)            # remove and return value
d.keys()              # all keys
d.values()            # all values
d.items()             # all (key, value) pairs
key in d              # membership check
```

### Set
```python
s = set()
s.add(x)
s.remove(x)           # raises KeyError if missing
s.discard(x)          # safe remove (no error)
s.pop()               # remove and return arbitrary element
x in s                # O(1) membership
s1 & s2               # intersection
s1 | s2               # union
s1 - s2               # difference
s1 ^ s2               # symmetric difference
```

---

## Python — Useful Patterns
```python
# Frequency count
from collections import Counter
freq = Counter(arr)         # {'a': 3, 'b': 2, ...}
freq.most_common(k)         # top k frequent elements

# defaultdict — no KeyError on missing keys
from collections import defaultdict
d = defaultdict(int)        # default value 0
d = defaultdict(list)       # default value []
d = defaultdict(set)        # default value set()

# Group by key
groups = defaultdict(list)
for item in arr:
    groups[key(item)].append(item)

# Enumerate — index + value
for i, val in enumerate(arr):
    pass

# Zip — iterate two lists together
for a, b in zip(arr1, arr2):
    pass
```

---

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

---

## Common Patterns
- **Frequency map** — count occurrences, find duplicates, top-k elements
- **Two-pass hash** — store values in first pass, look them up in second
- **Complement lookup** — store `target - x` to find pairs in O(n)
- **Grouping** — group items by a computed key (e.g., sorted word → anagram group)
- **Prefix sums + hash map** — subarray sum problems
- **Set for deduplication** — convert list to set to remove duplicates in O(n)

---

## Interview Tips
- Default to `dict` for counting/mapping, `set` for membership checks
- Use `Counter` for frequency problems — it has `.most_common(k)` built in
- `defaultdict(list)` avoids `KeyError` when grouping
- Sorting costs O(n log n) — if you only need a hash map, keep it O(n)
