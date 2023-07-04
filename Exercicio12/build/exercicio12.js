"use strict";
let renovar;
let ano = "03/07/2023";
function validarRenovacao(dataNasc, dataEmissao) {
    let nasc = new Date(dataNasc);
    let diaNasc = nasc.getDay();
    let mesNasc = nasc.getMonth();
    let anoNasc = nasc.getFullYear();
    let hoje = new Date;
    let anoHoje = hoje.getFullYear();
    let emissao = new Date(dataEmissao);
    let anoEmissao = emissao.getFullYear();
    let idade = anoHoje - anoNasc;
    let renovacao = anoHoje - anoEmissao;
    if (idade <= 20 && renovacao >= 5) {
        renovar = true;
    }
    else if (idade > 20 && idade <= 50 && renovacao >= 10) {
        renovar = true;
    }
    else if (idade > 50 && renovacao >= 15) {
        renovar = true;
    }
    else {
        renovar = false;
    }
    return renovar;
}
console.log(validarRenovacao("04/24/1993", "11/07/2015"));
//# sourceMappingURL=exercicio12.js.map