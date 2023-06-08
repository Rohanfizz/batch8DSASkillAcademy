
let arr: number[][] = [
    [1,2,3,4],
    [5,7,6,8],
    [9,6,4,2],
]
//TC: O(n*m)
for(let i  = 0;i<arr.length;i++){
    let s ="";
    for(let j = 0;j<arr[0].length;j++){
        s+=arr[i][j]+" ";
    }
    console.log(s); 
}