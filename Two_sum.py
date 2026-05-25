def twoSum(nums, target):
    seen = {}
    for i in range(len(nums)):
        need = target - nums[i]
        if need in seen:
            return i, seen[need]
        else:
            seen[nums[i]] = i

print(twoSum([1,2,3,4,5], 9))
