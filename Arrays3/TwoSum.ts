function twoSum(nums: number[], target: number): number[] {
    nums.sort(function(a, b){return a - b});

    let l = 0;  
    let r = nums.length-1;

    while(l<r){
        let sum = nums[l] + nums[r];
        if(sum == target){
            return [l,r];//i have found the two numbers
        }else if(sum > target) r--;
        else l++;
    }
    return []; //dummy
};

let arr = [1,20,30,40,50,60,70,80,90,100];

console.log(twoSum(arr,110));