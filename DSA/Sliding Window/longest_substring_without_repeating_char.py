#str = "abcabcbb"
#Longest Substring Without Repeating Characters
def longestSubstring(s):
    l = 0
    seen = set()
    maxVal = 0
    for r in range(len(s)):
        while s[r] in seen:
            seen.remove(s[l])
            l+=1
        seen.add(s[r])
        maxVal = max(maxVal, (r-l)+1)
    return maxVal


print(longestSubstring("abcabcbb"))