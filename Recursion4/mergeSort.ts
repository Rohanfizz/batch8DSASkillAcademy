function merge2SortedArrays(a: number[], b: number[]): number[] {
    let res: number[] = [];

    let i : number = 0;
    let j : number = 0;

    while(i<a.length && j<b.length){
        if(a[i] < b[j]){
            res.push(a[i]);
            i++;
        }else{
            res.push(b[j]);
            j++;
        }
    }

    while(i<a.length){
        res.push(a[i]);
        i++;
    }

    while(j<b.length){
        res.push(b[j]);
        j++;
    }
    return res;
}

function mergeSort(arr: number[],l:number,r: number) : number[]{
    if(l==r){
        let res:number[] = [];
        res.push(arr[l]);
        return res;
    }

    let mid = Math.floor((l+r)/2);

    let a : number[] = mergeSort(arr,l,mid);
    let b : number[] = mergeSort(arr,mid+1,r);

    return merge2SortedArrays(a,b);
}

let arr = [5,6,3,2,1,4,8,9];

let res = mergeSort(arr,0,arr.length-1);

console.log(res);