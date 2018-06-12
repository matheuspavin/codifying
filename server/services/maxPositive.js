

module.exports = function (arr) {
    if (arr.length === 1) {
        return A[0] === 1 ? 2 : 1;
    }
    arr.sort((a, b) => a - b);

    if (arr[0] > 1) {
        return 1;
    }

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