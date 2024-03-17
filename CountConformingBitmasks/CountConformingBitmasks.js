// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
count= 0;
function check(d){
    if(d == '0'){
        count++;
    }
}
function solution(A, B, C) {
    // Implement your solution here
    // A = A.toString(2);
    // B = B.toString(2);
    // C = C.toString(2);
    D = A & B & C;

    D = D.toString(2).split('');
    D.filter(check);
    return 2**(count-1);
}