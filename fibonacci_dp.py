def fibonacci(num):
    dp = [0] * (num + 1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, num+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp
print(fibonacci(5))

#dp for fibonacci


def fibo(n):
    a,b = 0,1
    for i in range(n):
        print(a)
        a,b = b, a+b
print(fibo(5))