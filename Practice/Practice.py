def maximumSum(nums, k):
    l=0
    maxSum = 0
    currentSum = 0
    for r in range(len(nums)):
        currentSum += nums[r]
        while r-l+1 > k:
            currentSum -= nums[l]
            l+=1
        if r-l+1 == k:
            maxSum = max(maxSum,currentSum)
    return maxSum
            





print(maximumSum([2, 1, 5, 1, 3, 2], 3))


