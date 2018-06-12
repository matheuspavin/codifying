const expect = require('chai').expect
const maxPositive = require('../services/maxPositive');

describe('Cache tests', function () {
    describe('Check the max positives', function () {
        it('Should return 5 from the array [1, 3, 6, 4, 1, 2]', async function () {
            console.log(maxPositive);
            const positive = maxPositive([1, 3, 6, 4, 1, 2]);
            expect(positive).to.be.equal(5);
        });
        it('Should return 4 from the array [1, 2, 3]', async function () {
            console.log(maxPositive);
            const positive = maxPositive([1, 2, 3]);
            expect(positive).to.be.equal(4);
        });
        it('Should return 1 from the array  [−1, −3]', async function () {
            console.log(maxPositive);
            const positive = maxPositive([-1, -3]);
            expect(positive).to.be.equal(1);
        });
    });
});
