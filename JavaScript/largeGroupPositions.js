/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var i,flag=0;
    var start=0,end=0;
    var result = [];
    for (i = 0; i < S.length; i++){
        if(S[i] != S[i-1]){
            end = i;
            if((end - start)>=3)
                result.push([start,end-1]);
            start = i;
        }
    }
    if((i - start) >= 3){
        result.push([start,i-1]);
    }
    return result;
};
console.log(largeGroupPositions("aaasddd"));
