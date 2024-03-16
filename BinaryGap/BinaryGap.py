# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")
from collections import deque
import math
def solution(N):
    # Implement your solution here
    maxCount = 0
    check = 0
    que = deque()
    while N>1:
        que.append(math.floor(N%2))
        N=N/2
    while len(que)>0:
        if que[len(que)-1]==0:
            que.pop()
        elif que[0]==0:
            que.popleft
        else:
            break
    while len(que)>0:
        if que.pop()==1:
            maxCount = max(maxCount, check)
            check=0
        else:
            check+=1

    return maxCount