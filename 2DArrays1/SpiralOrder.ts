function spiralOrder(arr: number[][]): number[] {
    let res : number[] = [];

    let lw = 0;
    let tw = 0;
    let bw = arr.length-1;
    let rw = arr[0].length-1;

    let total = arr.length * arr[0].length;

    while(total > 0){
        //tw
        for(let j = lw;j<=rw && total > 0 ;j++){
            res.push( arr[tw][j] );
            total--;
        }
        tw++;

        //rw
        for(let i = tw; i<= bw && total > 0 ;i++){
            res.push( arr[i][rw] );
            total--;
        }
        rw--;

        //bw
        for(let j = rw ; j>=lw && total > 0; j--){
            res.push( arr[bw][j] );
            total--;
        }
        bw--;

        //lw
        for(let i = bw ; i>= tw && total > 0;i--){
            res.push( arr[i][lw] );
            total--;
        }
        lw++;
    }
    return res;

};