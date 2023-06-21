function printPaths(
    n: number,
    m: number,
    i: number,
    j: number,
    psf: string
): void 
{
    if(i == n-1 && j == m-1){
        //reached
        console.log(psf);
        return;
    }
    if(i == n || j  == m){
        return;//out of bounds
    }

    //horizontal
    printPaths(n,m,i,j+1,psf+"H");
    //vertical
    printPaths(n,m,i+1,j,psf+"V");
}

printPaths(3,3,0,0,"");
