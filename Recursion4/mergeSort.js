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
function mergeSort(arr, l, r) {
    if (l == r) {
        var res_1 = [];
        res_1.push(arr[l]);
        return res_1;
    }
    var mid = Math.floor((l + r) / 2);
    var a = mergeSort(arr, l, mid);
    var b = mergeSort(arr, mid + 1, r);
    return merge2SortedArrays(a, b);
}
var arr = [5, 6, 3, 2, 1, 4, 8, 9];
var res = mergeSort(arr, 0, arr.length - 1);
console.log(res);
