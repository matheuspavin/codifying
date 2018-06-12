module.exports = function (num) {
    const binary = Number(num).toString(2);
    totalGap = 0;
    for (let i = 0; i < binary.length; i++) {
        if (Number(binary[i]) === 0) {
            let gap = 0;
            while (Number(binary[i]) === 0 && i < binary.length) {
                gap++;
                i++;
            }
            if (i < binary.length && gap > totalGap) {
                totalGap = gap;
            }
        }
    }
    return totalGap;
}