"use strict";
console.log('exercicio 09\n');
function imprimeConsole(parametro1, parametro2) {
    console.log(typeof parametro1, typeof parametro2);
}
imprimeConsole("Jéssica Morgana Schmidt Gonçalves", 19);
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function movies(name, year, gender, points) {
    console.log('nome: ', name, 'ano: ', year, 'genero', gender, points ? 'Pontuação: ' + points : '');
    let moviePoints = '';
    if (points) {
        moviePoints = `e foi classificado com ${points} pontos.`;
    }
    console.log(`O filme ${name}, foi lançado no ano de ${year} faz parte da categoria ${gender} ${moviePoints} `);
}
movies('Titanic', 1912, GENERO.ACAO, 10);
//# sourceMappingURL=exercicio9.js.map