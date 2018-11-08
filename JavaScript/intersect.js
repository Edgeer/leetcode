/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var i, j;
    var result=[];
    for (i = 0; i < nums1.length; i++){
        for (j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                result.push(nums1[i]);
                nums1.splice(i,1);
                nums2.splice(j,1);
                i--;
                j--;
                break;
            }   
        }
    }
    return result;
};
var intersect2 = function(num1, num2){
    // ES5
    // var intersection = a.filter(function(v){
    // return b.indexOf(v)!==-1
    // });
    let intersection = num1.filter(v => num2.includes(v));
    return intersection;
}
console.log(intersect2([1,2,3,4],[2,3]));
