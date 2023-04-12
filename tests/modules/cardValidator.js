
export function checkCardNumber(cardNumber) {
    const number = String(cardNumber);
    const length = number.length;

    if ((length === 13 || length === 16 || length === 19) && number.startsWith("4")) {
        return "Visa";
    } else if (length === 16 && number.match(/^5[1-5]/)) {
        return "Mastercard";
    } else if (length === 15 && number.match(/^3[47]/)) {
        return "American Express";
    } else {
        return "Nieprawidłowy";
    }
}
