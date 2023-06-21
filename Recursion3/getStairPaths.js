function getStairPaths(n, tar, asf) {
    //base Case
    if (n == tar) {
        console.log(asf);
        return;
    }
    if (n > tar)
        return;
    //one jump
    getStairPaths(n + 20, tar, asf + "20 + ");
    //two jump
    getStairPaths(n + 50, tar, asf + "50 + ");
    //three jump
    getStairPaths(n + 100, tar, asf + "100 + ");
}
getStairPaths(0, 300, "");
