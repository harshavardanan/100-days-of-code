class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for start in range(0,len(nums)):
            for end in range(1,len(nums)):
                if start!=end:
                    if nums[start]+nums[end] == target:
                        return [start, end]
        