class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexMap = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in indexMap:
                return [indexMap[diff], i]
            else:
                indexMap[n] = i