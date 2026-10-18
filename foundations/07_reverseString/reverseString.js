const reverseString = function(input) {
    const reverse = input.split('').reverse().join('');    // string doesn't have a reverse() method, so convert it into an array, then reverse it and then join it.
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
