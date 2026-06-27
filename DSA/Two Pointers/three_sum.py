
def threeSum(nums):
    nums.sort()
    for i in range(len(nums)):
        target = -nums[i]
        l,r = i+1, len(nums)-1 
        while l<r:
            if(i != l != r):
                if (nums[l] + nums[r]) == target:
                    return [nums[i], nums[l], nums[r]]
                elif (nums[l] + nums[r]) < target:
                    l+=1
                else:
                    r-=1

print(threeSum([-4, -1, -1, 0, 1, 2]))