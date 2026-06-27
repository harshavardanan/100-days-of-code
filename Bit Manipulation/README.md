# Bit Manipulation

## What is Bit Manipulation?
Bit Manipulation operates directly on the binary representation of integers using bitwise operators. It produces extremely fast, low-level solutions — often O(1) or O(log n) — for problems involving flags, masks, and binary properties.

## Bitwise Operators

| Operator | Symbol | Example | Result |
|----------|--------|---------|--------|
| AND | `&` | `5 & 3` → `101 & 011` | `001` = 1 |
| OR | `\|` | `5 \| 3` → `101 \| 011` | `111` = 7 |
| XOR | `^` | `5 ^ 3` → `101 ^ 011` | `110` = 6 |
| NOT | `~` | `~5` | `-6` (two's complement) |
| Left shift | `<<` | `1 << 3` | `8` (multiply by 2³) |
| Right shift | `>>` | `8 >> 1` | `4` (divide by 2) |

## Essential Tricks

```python
# Check if bit i is set
(n >> i) & 1

# Set bit i
n | (1 << i)

# Clear bit i
n & ~(1 << i)

# Toggle bit i
n ^ (1 << i)

# Check if n is a power of 2
n > 0 and (n & (n - 1)) == 0

# Clear the lowest set bit
n & (n - 1)

# Isolate the lowest set bit
n & (-n)

# Count set bits (Brian Kernighan's algorithm)
count = 0
while n:
    n &= n - 1   # clears lowest set bit each iteration
    count += 1

# XOR trick: a ^ a = 0, a ^ 0 = a
# Use to find the single non-duplicate in a list
result = 0
for x in arr:
    result ^= x
```

## Python Notes
```python
bin(n)       # binary string: '0b1010'
n.bit_length()  # number of bits needed to represent n
int('1010', 2)  # convert binary string to int → 10
```

## Common Patterns
- **Count set bits** — number of 1s in binary (Hamming weight)
- **Reverse bits** — mirror the bit pattern of an integer
- **Single number** — find the unique element using XOR
- **Power of two** — check with `n & (n-1) == 0`
- **Subsets** — enumerate all subsets of n elements using bitmask 0 to 2ⁿ-1
- **Bit DP** — use bitmask as state to represent sets (e.g., visited nodes)
