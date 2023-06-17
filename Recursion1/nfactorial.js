function fact(n) {
    if (n == 1)
        return 1;
    var nm1f = fact(n - 1);
    return n * nm1f;
}
console.log(fact(5));
