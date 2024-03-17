// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here
    var arr=A;
    var result =[];
    if(K ==0){
        return A;
    }else{
        for(let i= A.length - K ;i<A.length; i++){
            result.push(A[i]);
        }
    
        
        for(let j=0; j<A.length-K; j++){
            result.push(A[j]);
        }
        return result;
    }
    return 0;
}