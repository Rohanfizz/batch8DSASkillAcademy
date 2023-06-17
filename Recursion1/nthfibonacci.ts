function fibb(n:number) : number{
    //base cases
    if(n == 0) return 0;
    if(n == 1) return 1;

    let fnm2 = fibb(n-2);
    let fnm1 = fibb(n-1);
    let ans = fnm2 + fnm1;
    return ans;
}

console.log(fibb(7));