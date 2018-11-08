/**
 * @param  {number[]} nums
 * @param  {number} target
 */
var twoSum = function(nums, target) {
    var result=[];
    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                result.push(i);
                result.push(j);
                return result;
            }
        }   
    }
    return false;
};
var getTime = function(func, nums, target) {
    let start = new Date();
    console.log(func(nums, target));
    let end = new Date();
    console.log('运行时间: ' + (end - start));
}
console.log(getTime(twoSum,[2, 3, 5, 5], 8));
