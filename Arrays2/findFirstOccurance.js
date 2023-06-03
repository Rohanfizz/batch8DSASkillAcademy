function firstOccurance(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ans = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            ans = mid;
            r = mid - 1;
        }
        else if (target > arr[mid]) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return ans;
}
var ar = [10, 10, 20, 20, 20, 20, 20, 30, 30, 30, 30, 50, 50, 70, 70, 70, 70];
var target = 20;
console.log(firstOccurance(ar, target));
