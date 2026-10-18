const removeFromArray = function(array, ...nums) {
    let result = [];
    for(const item of array){
        if(!nums.includes(item)){
            result.push(item);
        }
    }
    return result;
};

/* Filter Method:
    const removeFromArray = function(array, ...nums){
        return array.filter((item) => !nums.includes(item));
    };
*/

/* Reverse Loop Method:

    const removeFromArray = function(array, ...nums){
        
    for (let i = array.length - 1; i >= 0; i--) {   // go backwards
        for (const num of nums) {
        if (num === array[i]) {
            array.splice(i, 1);
            break;   // stop checking other nums once we've removed this element
        }
        }
    }
    return array;
    };
    }

*/

// Do not edit below this line
module.exports = removeFromArray;
