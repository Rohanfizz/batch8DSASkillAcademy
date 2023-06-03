function firstOccurance(arr:number[],target:number):number{
    let l = 0;
    let r = arr.length-1;
    let ans = -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            ans = mid;
            r = mid-1;
        }else if(target > arr[mid]){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return ans;
}

let ar = [10 ,10 ,20 ,20 ,20 ,20 ,20 ,30 ,30 ,30 ,30 ,50 ,50 ,70 ,70 ,70 ,70];
let target = 20;
console.log(firstOccurance(ar,target));