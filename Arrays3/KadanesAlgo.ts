let arr = [2,-10,-6,3,-1,4,2,-7,-4,10,-20,-2,6,7];

function maxSumSubarray(arr:number[]) : number {
    let maxi = -Infinity;
    let train = 0;
    let i = 0;

    while(i<arr.length){
        //if i sit with prev train
        let prev = train + arr[i];
        //if i start my new train
        let neww = arr[i];
        train = Math.max(prev,neww);
        maxi = Math.max(maxi,train);
        i++;
    }
    return maxi;
}

console.log(maxSumSubarray(arr));