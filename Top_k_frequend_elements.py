def findAns(nums, k):
    dict1 = {i:nums.count(i) for i in nums}
    ans = []
    for i in dict1.keys():
        if dict1[i] >= k:
            ans.append(i)
    return ans

print(findAns([2,3],1))

