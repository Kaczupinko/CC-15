export const testCards = [
    { type: 'American Express', number: 378282246310005 },
    { type: 'American Express', number: 371449635398431 },
    { type: 'American Express Corporate', number: 378734493671000 },
    { type: 'Diners Club', number: 30569309025904 },
    { type: 'Discover', number: 6011111111111117 },
    { type: 'Discover', number: 6011000990139424 },
    { type: 'JCB', number: 3530111333300000 },
    { type: 'JCB', number: 3566002020360505 },
    { type: 'Mastercard', number: 2221000000000009 },
    { type: 'Mastercard', number: 2223000048400011 },
    { type: 'Mastercard', number: 2223016768739313 },
    { type: 'Mastercard', number: 5555555555554444 },
    { type: 'Mastercard', number: 5105105105105100 },
    { type: 'Visa', number: 4111111111111111 },
    { type: 'Visa', number: 4012888888881881 },
    { type: 'Visa', number: 4222222222222 }
];

export function testCardNumbers(checkCardNumber) {
    const results = testCards.map(card => {
        const cardProvider = checkCardNumber(card.number);
        return {
            expected: card.type,
            actual: cardProvider,
            number: card.number,
            success: card.type === cardProvider
        };
    });
    return results;
}
