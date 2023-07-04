"use strict";
function compareTwoNumber(num1, num2) {
    let higherNumber;
    let lowerNumber;
    if (num1 > num2) {
        higherNumber = num1;
        lowerNumber = num2;
    }
    else {
        higherNumber = num2;
        lowerNumber = num1;
    }
    const diference = higherNumber - lowerNumber;
    return diference;
}
//# sourceMappingURL=exercicio4.js.map