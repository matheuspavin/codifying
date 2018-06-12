const expect = require('chai').expect
const binaryGap = require('../services/binaryGap');

describe('Cache tests', function () {
    describe('Check the binary gaps', function () {
        // it('Should return 5 from the number 1041', async function () {
        //     const gap = binaryGap(1041);
        //     expect(gap).to.be.equal(5);
        // });
        it('Should return 0 from the number 32', async function () {
            const gap = binaryGap(32);
            expect(gap).to.be.equal(0);
        });
    });
});
