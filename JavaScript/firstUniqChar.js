/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var arr=[],key;
    //遍历数组 储存每个元素出现的次数
    for (var i in s){
        key = s[i];
        if(arr[key] >= 1){
            arr[key]++;
        }else{
           arr[key] = 1; 
        }
    }
    for (var i in s){
        if(arr[s[i]] == 1){
            return parseInt(i);
        }
    }
    return -1;
};
console.log(firstUniqChar("leetlode"));