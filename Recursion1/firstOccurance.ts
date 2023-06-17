function doWorkInPre(arr:number[],i:number,n:number):number{
    if(i == arr.length) return -1;

    if(arr[i] == n) return i;

    let next = doWorkInPre(arr,i+1,n);
    return next;
}

function doWorkInPost(arr:number[],i:number,n:number):number{
    if(i == arr.length) return -1;

    let next = doWorkInPost(arr,i+1,n);

    if(arr[i] == n) return i;
    return next;
}

let arr = [1,2,3,1,2,3,1,2,3,10];
console.log(doWorkInPre(arr,0,3))
console.log(doWorkInPost(arr,0,3))