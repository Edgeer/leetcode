/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var arr=[],key;
    for (var i in s){
        key = s[i];
        if (arr[key] >=1){
            arr[key]++;
        }else{
            arr[key] = 1;
        }
    }
    for (var i in t){
        key = t[i];
        if (arr[key] >= 1){
            arr[key]--;
        }else{
            return false;
        }
    }
    return true;
};

console.log(isAnagram("abc","acbd"));