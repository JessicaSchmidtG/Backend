let cpf:string = '';
function cpfValidation(cpf: string):boolean{
    //console.log(typeof cpf);
    //console.log(cpf);
    if (typeof cpf !== "string"){
        return false;
    }
    //let arr =[
    //    "00000000000", 
    //    "11111111111",
    //    "22222222222",
    //    "33333333333",
    //    "44444444444",
    //    "55555555555",
    //    "66666666666",
    //    "77777777777",
    //    "88888888888",
    //    "99999999999",
    //]
    //Forma de remover caracteres especiais de string usando regex
    let splitCpf = cpf.replace(/[\s.-]*/igm,'');
    if(splitCpf || splitCpf.length!==11 || splitCpf === "00000000000" || splitCpf === "11111111111"||
    splitCpf === "22222222222"||splitCpf === "33333333333"||splitCpf === "44444444444"||
    splitCpf === "55555555555"||splitCpf === "66666666666"||splitCpf === "77777777777"||
    splitCpf === "88888888888"||splitCpf === "99999999999"){
        return false;
    }
    //Calculando o 1º DV (penultimo DV)
    let sum:number = 0;
    let restoForPrimeiroDv: number;
    for(let i:number =1; i<=9; i++){
        sum = sum + parseInt(splitCpf.substring(i-1,i))*(11-i);
    }
    console.log(sum);
    restoForPrimeiroDv = 11-(sum % 11);
    console.log(restoForPrimeiroDv);
    if(restoForPrimeiroDv>=10){
        restoForPrimeiroDv = 0
    }
    //Calculando o 2º DV (ultimo DV)
    sum = 0
    let restoForSegundoDv: number
    for(let i:number =1; i<=10; i++){
        sum = sum + parseInt(splitCpf.substring(i-1,i))*(12-i);
    }
    console.log(sum);
    restoForSegundoDv = 11 - (sum % 11);
    console.log(restoForSegundoDv);
    if(restoForSegundoDv>=10){
        restoForSegundoDv = 0
    }
    
    return true;
}
console.log(cpfValidation("029.286.495-73"));