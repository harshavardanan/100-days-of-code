def findAnagrams(strs):
    output = []
    ans = []
    for i in strs:
        chars = {a : i.count(a) for a in i}
        output.append(chars)
    for i in range(len(output)):
        similar = []
        similar.append(strs[i])
        for j in range(i+1, len(output)):
            if output[i]==output[j]:
                similar.append(strs[j])
        if any(similar[0] in sublist for sublist in ans):
            pass
        else:
            ans.append(similar)
            similar = []
    return ans

print(findAnagrams(["act","pots","tops","cat","stop","hat"]))

