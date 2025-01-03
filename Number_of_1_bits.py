class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = f'{n:08b}'
        count = 0
        for i in range(len(ans)):
            if ans[i] == "1":
                count+=1
        return count