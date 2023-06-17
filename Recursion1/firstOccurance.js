function doWorkInPre(arr, i, n) {
    if (i == arr.length)
        return -1;
    if (arr[i] == n)
        return i;
    var next = doWorkInPre(arr, i + 1, n);
    return next;
}
function doWorkInPost(arr, i, n) {
    if (i == arr.length)
        return -1;
    var next = doWorkInPost(arr, i + 1, n);
    if (arr[i] == n)
        return i;
    return next;
}
var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, 10];
console.log(doWorkInPre(arr, 0, 10));
console.log(doWorkInPost(arr, 0, 10));
