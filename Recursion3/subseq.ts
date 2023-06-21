function printSubSeq(arr: number[], idx: number, asf: string): void {
    //base case
    if(idx == arr.length){
        console.log(asf);
        return;
    }

    //pick
    printSubSeq(arr,idx+1, asf+arr[idx]+", ");

    //not pick
    printSubSeq(arr,idx+1, asf);
}

let arr = [4,5,6];

printSubSeq(arr,0,"");