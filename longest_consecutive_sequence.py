def longest_consecutive_sequence(nums):
    longest_streak = 0
    streak = 0
    if not nums:
        return streak
    if len(nums) == 1:
        return 1
    num = sorted(nums)
    for i in range(1,len(num)):
        if num[i] == num[i-1] + 1:
            streak+=1
        elif num[i]== num[i-1]:
            streak = streak
        else:
            longest_streak = max(longest_streak, streak + 1)
            streak = 0
        longest_streak = max(longest_streak, streak + 1)
    return longest_streak

print(longest_consecutive_sequence([0,3,2,5,4,6,1,1])) 