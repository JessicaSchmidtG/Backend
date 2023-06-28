console.log('exercicio 09\n');
//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 
function imprimeConsole(parametro1:any, parametro2:any):void{

    console.log(typeof parametro1, typeof parametro2);
}
imprimeConsole("Jéssica Morgana Schmidt Gonçalves", 19);

//Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. 
//Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. 
//Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
//Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 
//4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).
//Considerando todas estas informações, crie uma função que receba todas essas informações como 
//parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`
function movies(name: string, year: number, gender: string, points?:number|undefined):void{  
    
    console.log('nome: ', name, 'ano: ', year, 'genero', gender, points ? 'Pontuação: '+ points : '');

    let moviePoints: string = '';
    if (points) {
        moviePoints  = `e foi classificado com ${points} pontos.`
    }

    console.log(`O filme ${name}, foi lançado no ano de ${year} faz parte da categoria ${gender} ${moviePoints} `);
}
movies('Titanic', 1912, GENERO.ACAO, 10);