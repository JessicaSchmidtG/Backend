"use strict";
let cpf = '';
function cpfValidation(cpf) {
    if (typeof cpf !== "string") {
        return false;
    }
    let splitCpf = cpf.replace(/[\s.-]*/igm, '');
    if (splitCpf || splitCpf.length !== 11 || splitCpf === "00000000000" || splitCpf === "11111111111" ||
        splitCpf === "22222222222" || splitCpf === "33333333333" || splitCpf === "44444444444" ||
        splitCpf === "55555555555" || splitCpf === "66666666666" || splitCpf === "77777777777" ||
        splitCpf === "88888888888" || splitCpf === "99999999999") {
        return false;
    }
    let sum = 0;
    let restoForPrimeiroDv;
    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1, i)) * (11 - i);
    }
    console.log(sum);
    restoForPrimeiroDv = 11 - (sum % 11);
    console.log(restoForPrimeiroDv);
    if (restoForPrimeiroDv >= 10) {
        restoForPrimeiroDv = 0;
    }
    sum = 0;
    let restoForSegundoDv;
    for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1, i)) * (12 - i);
    }
    console.log(sum);
    restoForSegundoDv = 11 - (sum % 11);
    console.log(restoForSegundoDv);
    if (restoForSegundoDv >= 10) {
        restoForSegundoDv = 0;
    }
    return true;
}
console.log(cpfValidation("029.286.495-73"));
//# sourceMappingURL=exercicio15.js.map