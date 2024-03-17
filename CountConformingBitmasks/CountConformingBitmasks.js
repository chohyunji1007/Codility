function toBinary(numb) {
    return (numb>>>0).toString(2);
}

function match(num, A, B, C){ //num은 A,B,C 중 최솟값
    const arrayBinary = toBinary(num).split('');
    // console.log(` num lenght ${arrayBinary.length}`)
    let matchA = true;
    let matchB = true;
    let matchC = true;
    
    const arrayBinaryA = toBinary(A).split('');
    const arrayBinaryB = toBinary(B).split('');
    const arrayBinaryC = toBinary(C).split('');

    for(let i=0; i<arrayBinary.length; i++){
        if(arrayBinaryA[i]==='1' && arrayBinary[i]==='0' && matchA) matchA=false;
        if(arrayBinaryB[i]==='1' && arrayBinary[i]==='0' && matchB) matchB=false;
        if(arrayBinaryC[i]==='1' && arrayBinary[i]==='0' && matchC) matchC=false;    
    }
    return (matchA || matchB || matchC);
    
}

function solution(A, B, C) {
    let init= Math.min(A,B,C);
    const limit = 2**30;
    let count = 0;
    // console.log('itens ', limit - init)
    if(A<limit && B<limit && C<limit && A>=0 && B>=0 && C>=0)
        for(init; init<limit; init=init+1){
            const isMatch = match(init,A,B,C);
            if(isMatch)
                count=count+1;
        }
    return count;
}
const result = solution(1073741727,1073741631,1073741679);
// console.log(`resultado ${result}`)