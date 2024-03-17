// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // Implement your solution here
    if(X>=Y){
        return 0;
    }else{
        return Math.ceil((Y-X)/D);
    }
}