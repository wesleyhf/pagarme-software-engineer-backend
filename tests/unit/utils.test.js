const creditCardUtils = require('../../app/utils/creditCard');

describe('Utils', () => {
    describe('creditCard', () => {
        test('getCardNumberLastDigits', () => {
            const digits = creditCardUtils
                .getCardNumberLastDigits('5115078914143083');

            expect(digits).toBe(3083);
        });

        test('toCardExpiryFormat', () => {
            const date = new Date('2021-10-19');
            const expiryDate = creditCardUtils.toCardExpiryFormat(date);

            expect(expiryDate).toBe('10/21');
        });
    });
});
