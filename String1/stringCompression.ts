let s = "aaabbccccdeeffaa";

function stringCompression(s:string){
    let i = 0;
    let ans  = "";

    while(i<s.length){
        let j = i;
        let cnt  = 0;

        while(j<s.length && s[i] == s[j]){
            j++;
            cnt++;
        }

        ans += s[i];
        if(cnt > 1) ans+= cnt;
        i = j;
    }
    return ans;
}
console.log(stringCompression(s));