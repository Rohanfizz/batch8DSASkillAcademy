var ar = [10, 20, 30, 40];
var n = ar.length;
function printSubarrays(arr) {
    for (var sp = 0; sp < n; sp++) {
        for (var ep = sp; ep < n; ep++) {
            //printing
            var s = "";
            for (var i = sp; i <= ep; i++)
                s += arr[i] + " ";
            console.log(s);
        }
    }
}
printSubarrays(ar);
