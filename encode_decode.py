def findAns(data):
    if not data:
        return ""
    encodedString = ""
    for i in data:
        encodedString+=i+"+"
    return decodeAns(encodedString[:-1])

def decodeAns(data):
    if data == "":
        return [data]
    return data.split("+")
print(findAns([""]))