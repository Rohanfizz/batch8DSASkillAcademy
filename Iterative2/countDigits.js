var n = 44343244;
var d = 3;
function countDigits(n, d) {
    var cnt = 0;
    while (n > 0) {
        var currDigit = n % 10;
        if (currDigit == d)
            cnt++;
        n = Math.floor(n / 10);
    }
    return cnt;
}
var res = countDigits(n, d);
console.log(res);
