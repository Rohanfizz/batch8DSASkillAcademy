let n = 150;


for(let row = 1;row<=n;row++){
    let thisRow = "";
    for(let col = 1;col<=n;col++){
        if(row == col) thisRow+="*";
        else thisRow += "o";
    }
    console.log(thisRow);
}