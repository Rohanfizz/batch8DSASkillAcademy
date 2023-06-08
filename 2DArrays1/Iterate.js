var arr = [
    [1, 2, 3, 4],
    [5, 7, 6, 8],
    [9, 6, 4, 2],
];
for (var i = 0; i < arr.length; i++) {
    var s = "";
    for (var j = 0; j < arr[0].length; j++) {
        s += arr[i][j] + " ";
    }
    console.log(s);
}
