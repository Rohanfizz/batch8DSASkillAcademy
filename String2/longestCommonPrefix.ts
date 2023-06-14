function longestCommonPrefix(arr: string[]): string{
    let ans : string = "";

    for(let i = 0;i<arr[0].length;i++){
        let c = arr[0][i];

        for(let j = 1;j<arr.length;j++){
            if(arr[j].length == i || arr[j][i] != c) return ans;
        }

        ans += c;
    }
    return ans;
};
