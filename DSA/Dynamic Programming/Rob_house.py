def rob(nums):
    dp = [0] * (len(nums)+1)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    for i in range(2, len(nums)):
        dp[i] = max(nums[i] + dp[i-2], dp[i-1])
    return dp[len(nums)-1]

print(rob([2, 7, 9, 3, 1]))