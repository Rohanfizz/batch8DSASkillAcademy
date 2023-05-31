function reverse(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
function reverseInRange(arr, l, r) {
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
function rotateKTimes(arr, k) {
    var n = arr.length;
    k = k % n;
    arr = reverseInRange(arr, n - k, n - 1);
    arr = reverseInRange(arr, 0, n - k - 1);
    arr = reverseInRange(arr, 0, n - 1);
    return arr;
}
var arr = [10, 20, 30, 40, 50];
// console.log(reverse(ar));
console.log(rotateKTimes(arr, 5));
// console.log(reverseInRange(ar,2,6))
