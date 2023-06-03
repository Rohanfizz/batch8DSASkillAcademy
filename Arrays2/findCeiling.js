function ceiling(arr, target) {
    //index of the ceil value of the target number
    //if the target is itself present, return its idx.
    var l = 0;
    var r = arr.length - 1;
    var ceil = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] > target) {
            ceil = mid;
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return ceil;
}
var ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
var target = 110.5;
var idx = ceiling(ar, target);
console.log(ar[idx]);
