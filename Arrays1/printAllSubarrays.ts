let ar : number[] = [10,20,30,40];
let n = ar.length;

function printSubarrays(arr:number[]){
    for(let sp = 0;sp<n;sp++){
        for(let ep = sp;ep<n;ep++){
            //printing
            let s:string = "";
            for(let i = sp;i<=ep;i++) s+= arr[i]+" ";
            console.log(s);
        }
    }
}

printSubarrays(ar);