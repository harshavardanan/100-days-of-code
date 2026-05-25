intervals = [[1,3], [2,6], [5,10], [15, 18]]

def mergeIntervals(intervals):
    output = []
    for i in range(1,len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            output.append([intervals[i-1][0], intervals[i][1]])
        else:
            output.append(intervals[i])
    return output
print(mergeIntervals(intervals))