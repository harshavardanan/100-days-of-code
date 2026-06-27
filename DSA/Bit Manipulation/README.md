# Bit Manipulation

## What is Bit Manipulation?
Bit Manipulation operates directly on the binary representation of integers using bitwise operators. It produces extremely fast O(1) solutions for problems involving flags, masks, and binary properties.

---

## Bitwise Operators

| Operator | Symbol | Example | Binary | Result |
|----------|--------|---------|--------|--------|
| AND | `&` | `5 & 3` | `101 & 011` | `001` = 1 |
| OR | `\|` | `5 \| 3` | `101 \| 011` | `111` = 7 |
| XOR | `^` | `5 ^ 3` | `101 ^ 011` | `110` = 6 |
| NOT | `~` | `~5` | `~101` | `-6` (two's complement) |
| Left Shift | `<<` | `1 << 3` | `001 → 1000` | `8` (× 2³) |
| Right Shift | `>>` | `8 >> 1` | `1000 → 0100` | `4` (÷ 2) |

---

## Core Operations

| Operation | Code | Notes |
|-----------|------|-------|
| Check if bit `i` is set | `(n >> i) & 1` | Returns 0 or 1 |
| Set bit `i` | `n \| (1 << i)` | Forces bit to 1 |
| Clear bit `i` | `n & ~(1 << i)` | Forces bit to 0 |
| Toggle bit `i` | `n ^ (1 << i)` | Flips the bit |
| Clear lowest set bit | `n & (n - 1)` | Useful for counting set bits |
| Isolate lowest set bit | `n & (-n)` | Only lowest 1-bit remains |
| Check power of 2 | `n > 0 and (n & (n-1)) == 0` | True if exactly one bit set |
| Get rightmost bit position | `n.bit_length() - 1` | 0-indexed from right |

---

## Built-in Methods Quick Reference
```python
# Binary representation
bin(n)                  # '0b1010'
bin(n)[2:]              # '1010' (strip prefix)
format(n, 'b')          # '1010'
format(n, '08b')        # '00001010' (zero-padded to 8 bits)

# Convert binary string to int
int('1010', 2)          # 10

# Bit length
n.bit_length()          # number of bits needed to represent n
                        # e.g., (10).bit_length() → 4

# Count set bits (Python 3.10+)
n.bit_count()           # number of 1-bits

# Count set bits (all versions — Brian Kernighan)
count = 0
while n:
    n &= n - 1          # clears lowest set bit
    count += 1

# XOR properties
a ^ a == 0              # same values cancel
a ^ 0 == a              # XOR with 0 is identity
a ^ b ^ a == b          # XOR is commutative and associative
```

---

## Shift Operations
```python
n << k      # multiply by 2^k  (n * 2**k)
n >> k      # divide by 2^k    (n // 2**k)

# Iterate over all bits
for i in range(32):
    bit = (n >> i) & 1

# Build number from bits
n = 0
for i, bit in enumerate(bits):
    n |= (bit << i)
```

---

## Common Patterns
- **Count set bits** — Brian Kernighan: `n &= n-1` in a loop
- **Single number** — XOR all elements; duplicates cancel out (`a ^ a = 0`)
- **Reverse bits** — shift and OR bit by bit from LSB to MSB
- **Power of two** — `n > 0 and (n & (n-1)) == 0`
- **Subsets via bitmask** — iterate `0` to `2ⁿ - 1`, each bit = include/exclude item
- **Swap without temp** — `a ^= b; b ^= a; a ^= b`

---

## Interview Tips
- `n & (n-1)` is the most-used trick — it removes the lowest set bit in O(1)
- XOR is your tool for "find the unique element" problems
- Left shift by k = multiply by 2^k; right shift by k = integer divide by 2^k
- For bitmask DP, state is an integer where each bit represents an element being included
