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