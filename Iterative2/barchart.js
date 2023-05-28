var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
function getMax(arr) {
    var maxi = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (maxi < arr[i]) {
            maxi = arr[i];
        }
    }
    return maxi;
}
function printBarChart(arr) {
    var n = arr.length;
    var maxi = getMax(arr);
    for (var floor = maxi; floor >= 1; floor--) {
        var s = "";
        for (var i = 0; i < n; i++) {
            if (arr[i] >= floor)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
printBarChart(arr);
