function reverse(arr: number[]): number[] {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }

    return arr;
}
function reverseInRange(arr: number[], l: number, r: number): number[] {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }

    return arr;
}

function rotateKTimes(arr,k){
    let n = arr.length;
    k = k%n;
    arr = reverseInRange(arr, n-k , n-1);//reverse last k people
    arr = reverseInRange(arr, 0, n-k-1);//first n-k-1
    arr = reverseInRange(arr,0,n-1);//reverse whole array
    return arr;
}

let arr = [10, 20, 30, 40, 50];
// console.log(reverse(ar));
console.log(rotateKTimes(arr,5));
// console.log(reverseInRange(ar,2,6))