function isPalindrome(s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        if (s[l] != s[r])
            return false;
        l++;
        r--;
    }
    return true;
}
function printAllPalindromicSubstrings(s) {
    for (var sp = 0; sp < s.length; sp++) {
        for (var ep = sp; ep < s.length; ep++) {
            var substr = s.substring(sp, ep + 1);
            if (isPalindrome(substr)) {
                console.log(substr);
            }
        }
    }
}
var s = "NAMAN";
printAllPalindromicSubstrings(s);
