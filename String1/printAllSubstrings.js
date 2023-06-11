var s = "abcxyz";
function printAllSubstrings(s) {
    for (var sp = 0; sp < s.length; sp++) {
        for (var ep = sp; ep < s.length; ep++) {
            console.log(s.substring(sp, ep + 1));
        }
    }
}
printAllSubstrings(s);
