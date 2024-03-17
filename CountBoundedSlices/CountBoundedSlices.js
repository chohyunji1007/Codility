// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function mm(arr){
    let s=1000000000;
    let b=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<s){
            s = arr[i];
        }
        if(arr[i]>b){
            b = arr[i];
        }
    }
    
    return b-s;
}
function solution(K, A) {
    // Implement your solution here
    // 최댓값 - 최솟값 <= K 인 조각의 수
    count= A.length; //자기 자신과 자기자신 한 수
    // B = [];
    for(let i=0; i<A.length-1; i++){
        for(let j=2; j<A.length+1;j++){
            if(i!=j && j-i>1){
                let B = A.slice(i, j);
                // console.log(A.slice(i, j));
                if(mm(B)>K){
                    j=A.length+1; //j문 breack
                }else{
                    count++;
                    if(count>=1000000000){
                        return 1000000000;
                    }
                }
            }
        }
    }
    return count;
}