let n = 5;

for (let line = 1; line <= n; line++) {
    let stars = line;
    let spaces = n - line;
    
    let s = "";

    for(let j = 1;j<=spaces;j++){
        s+=" ";
    }

    for(let j = 1;j<=stars;j++){
        s+="*";
    }
    
    console.log(s);
}
