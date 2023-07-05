"use strict";
let num = 1990;
let romanos = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 },
];
function convert(num) {
    let numRom = " ";
    for (const { symbol, value } of romanos) {
        while (num >= value) {
            num -= value;
            numRom += symbol;
        }
    }
    return numRom;
}
console.log(convert(1992));
//# sourceMappingURL=exercicio14.js.map