function fact(n:number):number{
    if(n == 1) return 1;

    let nm1f = fact(n-1);

    return n * nm1f;
}

console.log(fact(5));