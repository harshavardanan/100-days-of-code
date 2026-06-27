#This is a inline dictionary method to count and print the duplicate elements in a list.
nums = [1,2,3,3,4,5]
dict1 = {i:nums.count(i) for i in nums}
print(dict1)


# Contains Duplicate
# Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

# Example 1:

# Input: nums = [1, 2, 3, 3]
# Output: true

# Example 2:

# Input: nums = [1, 2, 3, 4]
# Output: false

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        val = {i: nums.count(i) for i in nums }
        for v in val.values():
            if v>1:
                return True
        return False