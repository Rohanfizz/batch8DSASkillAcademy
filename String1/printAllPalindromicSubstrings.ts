function isPalindrome(s:string) :boolean{
    let l = 0;
    let r = s.length-1;
    while(l<r){
        if(s[l] != s[r]) return false;
        l++;
        r--;
    }
    return true;
}

function printAllPalindromicSubstrings(s:string){
    for(let sp=0;sp<s.length;sp++){
        for(let ep = sp;ep<s.length;ep++){

            let substr = s.substring(sp,ep+1);

            if( isPalindrome(substr) ){

                console.log(substr);

            }

        }
    }
}
let s = "NAMAN"
printAllPalindromicSubstrings(s);