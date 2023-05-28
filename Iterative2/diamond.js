var n = 17;
var stars = 1;
var spaces = Math.floor(n / 2);
for (var i = 1; i <= n; i++) {
    var s = "";
    //add "spaces" number of spaces
    for (var j = 1; j <= spaces; j++) {
        s += " ";
    }
    //add "stars" number stars
    for (var j = 1; j <= stars; j++) {
        s += "*";
    }
    console.log(s);
    if (i <= n / 2) {
        stars += 2;
        spaces--;
    }
    else {
        stars -= 2;
        spaces++;
    }
}
