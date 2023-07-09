function ngel(arr) {
    var st = [];
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        while (st.length > 0 && st[st.length - 1] <= arr[i]) {
            st.pop();
        }
        if (st.length == 0)
            res.push(-1);
        else
            res.push(st[st.length - 1]);
        st.push(arr[i]);
    }
    return res;
}
console.log(ngel([5, 3, 2, 7, 2, 3, 4, 2, 1]));
