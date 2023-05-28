let n : number = 44343244;
let d :number = 3;

function countDigits(n:number,d:number) : number {
    let cnt  = 0;

    while(n>0){
        let currDigit = n%10;

        if(currDigit == d) cnt++;

        n= Math.floor(n/10);
    }

    return cnt;
}

let res: number = countDigits(n,d);
console.log(res);