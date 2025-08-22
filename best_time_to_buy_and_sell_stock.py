class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        for left in range(0,len(prices)):
            for right in range(left,len(prices)):
                if prices[left] == prices[right]:
                    continue
                ans = max(ans, prices[right]-prices[left])
        return ans