let arr: number[][] = [
    [1,2,3,4],
    [5,7,6,8],
    [9,6,4,2],
]

for(let j = arr[0].length-1; j>=0 ;j--){
    for(let i = arr.length-1; i>=0;i--){
        console.log(arr[i][j]);
    }
}