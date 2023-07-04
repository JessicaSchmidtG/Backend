"use strict";
//Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema 
//de organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou a criar uma
//função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:
//Aproveitando a função já feita, faça uma nova função que receba o array de estoque como parâmetro, 
//use a função ajustaPreco para corrigir os preços e retorne a lista de estoque ordenada pela quantidade 
//de cada produto. 
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
let estoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
let listaEstoque = (function (estoque) { });
//# sourceMappingURL=exercicio11.js.map