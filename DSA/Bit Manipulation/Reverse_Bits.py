class Solution:
    def reverseBits(self, n: int) -> int:
        n = f"{n:032b}"  
        num = 0
        rev = str(n[::-1])  
        for i in range(len(n)):
            num += int(rev[i]) * (2 ** i)  
        return (int(rev, 2))
