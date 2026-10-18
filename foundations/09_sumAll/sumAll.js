const sumAll = function(int1, int2) {
    if ((Number.isInteger(int1) === false) || (Number.isInteger(int2) === false)){
        return "ERROR";
    }

    if((int1 < 0) || (int2 < 0)){
        return "ERROR";
    }

    if(int1>int2){
        const temp = int1;
        int1 = int2;
        int2 = temp;
    }

    let total = 0;
    for(let i = int1; i<= int2; i++){
        
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
