const moment = require('moment');

module.exports = {
    getCardNumberLastDigits: (cardNumber) => Number(cardNumber.substr(-4)),
    toCardExpiryFormat: (date) => moment(date).format('MM/YY'),
};
