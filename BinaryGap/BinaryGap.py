# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N):
    # Implement your solution here
    maxCount = 0
    currentCount = 0
    isCounting = False
    
    # 이진 표현 계산 최적화
    binary_representation = bin(N)[2:]
    
    for bit in binary_representation:
        if bit == '1':
            maxCount = max(maxCount, currentCount)
            currentCount = 0
            isCounting = True
        elif isCounting:
            currentCount += 1
    
    return maxCount