function stringWithDiffOfAdjChars(s) {
    var ans = "";
    ans += s[0];
    var i = 1;
    while (i < s.length) {
        var next = s.charCodeAt(i);
        var curr = ans.charCodeAt(ans.length - 1);
        var diff = next - curr;
        ans += diff;
        ans += s[i];
        i++;
    }
    return ans;
}
console.log(stringWithDiffOfAdjChars("abcdDcba"));
