function merge2SortedArrays(a, b) {
    var res = [];
    var i = 0;
    var j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            res.push(a[i]);
            i++;
        }
        else {
            res.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        res.push(a[i]);
        i++;
    }
    while (j < b.length) {
        res.push(b[j]);
        j++;
    }
    return res;
}
var a = [5, 16, 18, 23];
var b = [1, 3, 19, 34, 46];
var res = merge2SortedArrays(a, b);
console.log(res);
