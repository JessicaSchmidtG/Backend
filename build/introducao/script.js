"use strict";
//DECLARAÇÃO DE VARIAVEIS
const company = "Senac";
let age = 31;
let isCorrect = true;
//DECLARAÇÃO DE ARRAY
const arr = [1, 2, 3];
const array = [1, 2, 3];
//DECLARAÇÃO DE OBJETO
const person = {
    name: "Senac",
    age: 30
};
//DECLARAÇÃO TIPO ANY
let result;
result = "result";
result = 1903;
result = true;
//DECLARAÇÃO FUNÇÃO TIPADA
function sum(n1, n2) {
    return n1 + n2;
}
function resultSum(n1, n2) {
    let result = n1 + n2;
    return `Resultado é ${result}.`;
}
//DECLARÇÃO DE FUNÇÃO VOID
function sayHello(name) {
    console.log("Hello, ", name || "world");
}
//# sourceMappingURL=script.js.map