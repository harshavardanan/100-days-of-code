def findAnagrams(strs):
    output = []
    a = 0
    ans = []
    for i in strs:
        chars = {a : i.count(a) for a in i}
        output.append(chars)
    for i in range(len(output)):
        similar = []
        if output[i] not in ans:
            similar.append(output[i])
            for j in range(i+1, len(output)):
                if output[i]==output[j]:
                    ans.append(output[i])
                else:
                    ans.append(output[j])
            print(similar)
        ans.append(similar)
    return ans

print(findAnagrams(["act","pots","tops","cat","stop","hat"]))
