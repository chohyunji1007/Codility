// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // Implement your solution here
    // x 현재위치, y 이동할 위치(크거나 같으면 됨), d 점프 거리
    if(X>=Y){
        return 0;
    }
    return Math.ceil(Y/D);
}