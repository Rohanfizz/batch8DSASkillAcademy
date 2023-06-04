function twoSum(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    console.log(nums);
    var l = 0;
    var r = nums.length - 1;
    while (l < r) {
        var sum = nums[l] + nums[r];
        if (sum == target) {
            return [l, r]; //i have found the two numbers
        }
        else if (sum > target)
            r--;
        else
            l++;
    }
    return []; //dummy
}
;
var arr = [1, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(twoSum(arr, 110));
