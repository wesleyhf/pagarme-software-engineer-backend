const paymentMethods = require('../../app/enums/paymentMethods');
const payableStatus = require('../../app/enums/payableStatus');

describe('Enumerables', () => {
    test('paymentMethods', () => {
        expect(paymentMethods).toHaveProperty('DEBIT', 'debit');
        expect(paymentMethods).toHaveProperty('CREDIT', 'credit');
    });

    test('payableStatus', () => {
        expect(payableStatus).toHaveProperty('PAID', 'paid');
        expect(payableStatus).toHaveProperty('WAITING_FUNDS', 'waiting_funds');
    });
});
