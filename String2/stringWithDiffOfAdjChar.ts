function stringWithDiffOfAdjChars(s: string) : string{
    let ans:string  = "";
    ans+=s[0];
    let i:number = 1;

    while(i<s.length){
        let next = s.charCodeAt(i);
        let curr = ans.charCodeAt(ans.length-1);
        let diff = next - curr;

        ans+=diff;
        ans+=s[i];
        i++;
    }
    return ans;
}
console.log(stringWithDiffOfAdjChars("abcdDcba"));