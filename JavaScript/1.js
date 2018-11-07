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
console.log(twoSum([2, 3, 5, 5], 8));
