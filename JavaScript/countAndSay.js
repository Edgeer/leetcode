/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var num = '1',numTemp = ''; 
    var time = 0,i = 0;
    for(;n>1; n--){
        for (i = 0,time = 0,numTemp = ''; i < num.length; i++){
            if(i>0 && num[i] !== num[i-1]){
                numTemp += time + num[i-1];
                time = 0;
            }
            time++;
        }
        numTemp += time+num[i-1];
        num = numTemp;
    }
    return num;
};
console.log(countAndSay(5));
