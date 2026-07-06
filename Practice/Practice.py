def sortZero(nums):
    l = 0
    r = 1
    while l<=r and r<len(nums):
        if nums[l] == 0 and nums[r]!= 0:
            nums[l], nums[r] = nums[r], nums[l]
            l+=1
        elif nums[r] == 0 and nums[l]!=0:
            nums[r], nums[l] = nums[l], nums[r]
            r+=1
        elif nums[l]==0 and nums[r]==0:
            r+=1
        else:
            l+=1
            r+=1
    return nums




print(sortZero([0,1,0,3,12]))
# nums = [0, 1, 0, 3, 12]
