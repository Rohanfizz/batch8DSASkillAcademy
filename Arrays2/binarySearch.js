function binarySearch(arr, target) {
    //This function returns the index of target inside tne array;
    //if the target is not present it will return -1
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            //if we have found the target, return mid
            return mid;
        }
        else if (target > arr[mid]) {
            //if the target is greater than element  on mid,
            //search in the right side of mid
            l = mid + 1;
        }
        else if (target < arr[mid]) {
            //if the target is smaller than element on mid
            //search in the left side of mid
            r = mid - 1;
        }
    }
    "";
    //if we are standing on this line,
    //this means, we were not able to find the element in the array
    return -1;
}
var ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
var target = 130;
var idx = binarySearch(ar, target);
console.log(idx);
