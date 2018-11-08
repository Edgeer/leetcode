/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i,j=0,length = nums.length;
    for (i = 0;i<length;){
        if(nums[i] == 0){
            nums.splice(i,1);
            nums.push(0);
            length--;
        }else{
            i++;
        }
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));