function fibb(n) {
    //base cases
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    var fnm2 = fibb(n - 2);
    var fnm1 = fibb(n - 1);
    var ans = fnm2 + fnm1;
    return ans;
}
console.log(fibb(7));
