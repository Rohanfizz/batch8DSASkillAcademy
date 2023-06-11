var s = "aaabbccccdeeffaa";
function stringCompression(s) {
    var i = 0;
    var ans = "";
    while (i < s.length) {
        var j = i;
        var cnt = 0;
        while (j < s.length && s[i] == s[j]) {
            j++;
            cnt++;
        }
        ans += s[i];
        if (cnt > 1)
            ans += cnt;
        i = j;
    }
    return ans;
}
console.log(stringCompression(s));
