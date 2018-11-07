

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
var twoSum2 = function(nums, target) {
    let x, y, z = nums.length;
    nums.some((item1, index1) => {
        return nums.slice(index1 + 1, z).some((item2,index2) => {
                if(item1 + item2 === target) {
                    x = index1;
                    y = index1 + index2 + 1;
                    return true;
                }
        })
    });
    if(typeof(x) === 'undefined') {
        return '没找到!';
    } else {
        return [x, y];
    }
}
var getTime = function(func, nums, target) {
    let start = new Date();
    console.log(func(nums, target));
    let end = new Date();
    console.log('运行时间: ' + (end - start));
}
console.log(twoSum([2, 3, 5, 5], 8));

