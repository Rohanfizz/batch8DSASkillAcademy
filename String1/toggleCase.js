var s = "aAbrCDeF";
function toggleCase(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i); //char -> ascii
        if (ascii >= 97) {
            //small letter
            ascii -= 32;
        }
        else {
            //capital letter
            ascii += 32;
        }
        var newChar = String.fromCharCode(ascii); //ascii -> char 
        ans += newChar;
    }
    return ans;
}
console.log(toggleCase(s));
