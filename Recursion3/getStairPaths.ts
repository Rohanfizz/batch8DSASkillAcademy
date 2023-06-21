function getStairPaths(n: number, tar: number, asf: string): void {
    //base Case
    if(n == tar){
        console.log(asf);
        return;
    }
    if(n > tar) return;

    //one jump
    getStairPaths(n+1,tar,asf+"1");
    //two jump
    getStairPaths(n+2,tar,asf+"2");
    //three jump
    getStairPaths(n+3,tar,asf+"3");
}

getStairPaths(0,1000,"");
