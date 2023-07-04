//Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa 
//(ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). 
//A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. 
//A carteira precisa ser renovada segundo os seguintes critérios:

//- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
//(se for exatamente 5 anos, deve ser renovada).
//- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos 
//(se for exatamente 10 anos, deve ser renovada).
//- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

let renovar: boolean;
let ano: string = "03/07/2023";

function validarRenovacao(dataNasc: string, dataEmissao:string):boolean {
    // formata data de string em formato data americano aaaa/dd/
    let nasc = new Date(dataNasc);
    let diaNasc = nasc.getDay();
    let mesNasc = nasc.getMonth();
    let anoNasc = nasc.getFullYear();
    let hoje = new Date;
    let anoHoje = hoje.getFullYear();
    let emissao = new Date(dataEmissao);
    let anoEmissao = emissao.getFullYear();
    let idade = anoHoje - anoNasc;
    let renovacao = anoHoje-anoEmissao;
    if(idade <=20 && renovacao >= 5){
        renovar = true;
    }else if(idade >20 && idade<=50 && renovacao >= 10){
        renovar = true;
    }else if(idade >50 && renovacao >= 15){
        renovar = true;
    }else{
        renovar = false
    }
    return renovar;
}

console.log(validarRenovacao("04/24/1993", "11/07/2015"));