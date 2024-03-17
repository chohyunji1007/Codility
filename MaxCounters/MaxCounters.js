// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // Implement your solution here
    let arr = new Array(N).fill(0);
    // console.log(arr);
    for(let i=0; i<A.length; i++){
        if(A[i] == N+1){ //모두 최댓값으로
            let max_v = Math.max(...arr);
            arr=[];
            // console.log('max =', max_v);
            arr = Array(N).fill(max_v);
            
        }else{
            arr[A[i]-1]+=1;
            // console.log(arr);
        }
    }
    return(arr);
}