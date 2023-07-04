"use strict";
console.log('exercicio 09\n');
//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 
function imprimeConsole(parametro1, parametro2) {
    console.log(typeof parametro1, typeof parametro2);
}
imprimeConsole("Jéssica Morgana Schmidt Gonçalves", 19);
//Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. 
//Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. 
//Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
//Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 
//4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).
//Considerando todas estas informações, crie uma função que receba todas essas informações como 
//parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`
function movies(name, year, gender, points) {
    console.log('nome: ', name, 'ano: ', year, 'genero', gender, points ? 'Pontuação: ' + points : '');
    let moviePoints = '';
    if (points) {
        moviePoints = `e foi classificado com ${points} pontos.`;
    }
    console.log(`O filme ${name}, foi lançado no ano de ${year} faz parte da categoria ${gender} ${moviePoints} `);
}
movies('Titanic', 1912, GENERO.ACAO, 10);
// Exercicio 4
//O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, 
//setores e se trabalham presencialmente ou por home office:
//Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. 
//Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor 
//de marketing que trabalham presencialmente. 
var setor;
(function (setor) {
    setor["MARKETING"] = "marketing";
    setor["VENDAS"] = "vendas";
    setor["FINANCEIRO"] = "financeiro";
})(setor || (setor = {}));
let employers = [
    { nome: "Marcos", salario: 2500, setor: setor.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: setor.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: setor.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: setor.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: setor.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: setor.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: setor.MARKETING, presencial: true }
];
function marketingEmployers(employers) {
    return employers.filter(people => people.setor === setor.MARKETING && people.presencial === true);
}
console.log(marketingEmployers(employers));
//# sourceMappingURL=exercicio9.js.map