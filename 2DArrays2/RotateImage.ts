/**
 Do not return anything, modify matrix in-place instead.
 */
 function transpose(arr:number[][]) : number[][]{
    let n = arr.length;
    for(let i = 0;i<n;i++){
        for(let j = i;j<n;j++){

            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;

        }
    }
    return arr;
}
function rotate(arr: number[][]): void {
    let n = arr.length;
    //Step 1: Take the transpose of the matrix
    arr = transpose(arr);
    //Step 2: Reverse all rows
    for(let i = 0;i<n;i++){
        let l = 0;
        let r = n-1;
        while(l<r){

            let temp = arr[i][l];
            arr[i][l] = arr[i][r];
            arr[i][r] = temp;

            l++;
            r--;
        }
    }
};