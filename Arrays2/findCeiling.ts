function ceiling(arr: number[], target: number): number {
    //index of the ceil value of the target number
    //if the target is itself present, return its idx.
    let l = 0;
    let r = arr.length - 1;
    let ceil = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] > target) {
            ceil = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ceil;
}

let ar: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
let target: number = 110.5;
let idx = ceiling(ar, target);
console.log(ar[idx]);
