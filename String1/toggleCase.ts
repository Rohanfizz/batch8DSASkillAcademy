let s = "aAbrCDeF";

function toggleCase(s:any):string{
    let ans = "";
    for(let i = 0;i<s.length;i++){
        let ascii = s.charCodeAt(i);//char -> ascii

        if(ascii >= 97){
            //small letter
            ascii -= 32;
        }else{
            //capital letter
            ascii += 32;
        }

        let newChar = String.fromCharCode(ascii);//ascii -> char 
        ans += newChar;      
    }
    return ans;
}

console.log(toggleCase(s));