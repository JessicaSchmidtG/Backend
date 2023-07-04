"use strict";
function checkRenovationId() {
    const currentYear = Number(prompt("Digite o ano atual"));
    const birthYear = Number(prompt("Digite o ano de nascimento"));
    const issueYear = Number(prompt("Digite o ano de emissão do documento"));
    const age = currentYear - birthYear;
    const walletTime = currentYear - issueYear;
    const cond1 = age <= 20 && walletTime >= 5;
    const cond2 = age > 20 && age <= 50 && walletTime >= 10;
    const cond3 = age > 50 && walletTime >= 15;
    return (cond1 || cond2 || cond3);
}
//# sourceMappingURL=exercicio5.js.map