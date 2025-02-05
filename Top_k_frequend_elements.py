class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d = {i:nums.count(i) for i in nums}
        sorted_items = sorted(d.items(), key=lambda item: item[1], reverse=True)
        ans = []
        for i in range(k):
            ans.append(sorted_items[i][0])
        return ans
      
# Example usage
print(findAns([1,2,2,3,3,3], 2))  # Output: [2, 1]

