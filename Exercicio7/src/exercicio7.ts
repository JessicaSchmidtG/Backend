console.log("Exercicio 07");
// Função que recebe string com nome, e outra string com data (26/06/23)
//retornar string no formato;
//Olá me chamo $(nome), nasci no dia (dia) do mes (mes) do ano de (ano).

function apresentation(name: string, birthDate: string): string {
    const nameApresentation: string = name;
    let day = birthDate.split("/");
    let month = day[1];
    let ano = day[2];
    
    if(month == "01"){
        month = "January";
    }
    else if(month == "02"){
        month = 'February';
    }
    else if(month == "03"){
        month = 'March';
    }
    else if(month == "04"){
        month = 'April';
    }
    else if(month == "05"){
        month = 'May';
    }
    else if(month == "06"){
        month = 'June';
    }
    else if(month == "07"){
        month = 'July';
    }
    else if(month == "08"){
        month = 'August';
    }
    else if(month == "09"){
        month = 'September';
    }
    else if(month == "10"){
        month = 'October';
    }
    else if(month == "11"){
        month = 'November';
    }
    else if(month == "12"){
        month = 'December';
    }
    
    return `Hi, My name is ${nameApresentation}, I was born in ${day[0]} of ${month} in the year ${day[2]}.`;
}

console.log(apresentation('Jéssica', "18/05/1992"));
