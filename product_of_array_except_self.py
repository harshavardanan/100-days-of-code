def findAns(nums):
    ans = []
    for i in range(len(nums)):
        total_prod = 1
        for a in range(len(nums)):
            if a == nums.index(nums[a]):
                continue
            else:
                total_prod*=nums[a]
        ans.append(total_prod)
    return ans

print(findAns([-1,0,1,2,3]))
