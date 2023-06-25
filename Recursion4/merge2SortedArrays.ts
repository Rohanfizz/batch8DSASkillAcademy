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


let a = [5,16,18,23];
let b = [1,3,19,34,46];

let res = merge2SortedArrays(a,b);

console.log(res);