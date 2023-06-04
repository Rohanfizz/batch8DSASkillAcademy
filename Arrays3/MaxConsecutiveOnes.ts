function longestOnes(nums: number[], k: number): number {
    let sp = 0;
    let ep = 0;
    let ans= 0;
    let numOfZeroes = 0;

    while(ep<nums.length){
        //introduce
        if(nums[ep]  == 0) numOfZeroes++;
        //now that the new person has been introduced,
        //it is possible that my window might become invalid
        //i have to make this window valid, by shrinking it until
        //its invalid
        while(numOfZeroes > k){
            //lose a person
            if(nums[sp] == 0) numOfZeroes--;
            sp++;
        }
        //if im standing on this line of code
        //i can surely say that the window will be valid
        //consider answer
        ans = Math.max(ans,ep-sp+1);
        //expand window
        ep++;
    }
    return ans;
};