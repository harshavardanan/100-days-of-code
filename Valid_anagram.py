class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        str1 = {i:s.count(i) for i in s}
        str2 = {i:t.count(i) for i in t}
        return str1==str2