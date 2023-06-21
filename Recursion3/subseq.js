function printSubSeq(arr, idx, asf) {
    //base case
    if (idx == arr.length) {
        console.log(asf);
        return;
    }
    //pick
    printSubSeq(arr, idx + 1, asf + arr[idx] + ", ");
    //not pick
    printSubSeq(arr, idx + 1, asf);
}
var arr = [4, 5, 6];
printSubSeq(arr, 0, "");
