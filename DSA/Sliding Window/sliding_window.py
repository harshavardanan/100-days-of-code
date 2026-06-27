def slidingWindow(s):
    max_val = 0
    start = 0
    for end in range(len(s)):
        while s[start]==s[end]:
            max_val = max(max_val, end-start)
            start+=1
    return max_val



st = "helloworld"
print(slidingWindow(st))

 