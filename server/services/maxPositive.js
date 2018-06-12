

module.exports = function (arr) {
    arr.sort((a, b) => a - b);
    const maxNumber = arr.slice(-1).pop();
    if (maxNumber <= 0) {
        return 1;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + 1 !== arr[i+1] && arr[i+1] !== arr[i]) {
                return arr[i] + 1;
            }
        }
    }
    return maxNumber + 1;
};