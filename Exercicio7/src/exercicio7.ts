console.log("Exercicio 07");
// Função que recebe string com nome, e outra string com data (26/06/23)
//retornar string no formato;
//Olá me chamo $(nome), nasci no dia (dia) do mes (mes) do ano de (ano).

function apresentation(name: string, birthDate: string): void {
    const nameApresentation: string = name;
    let day = birthDate.split("/");
    let month: number = day[1];
    let ano = day[2];
    let monthDescription;
    if(month == 01){
        monthDescription = "January";
    }
    else if(month == 02){
        monthDescription = 'February';
    }
    else if(month == 03){
        monthDescription = 'March';
    }
    else if(month == 04){
        monthDescription = 'April';
    }
    else if(month == 05){
        monthDescription = 'May';
    }
    else if(month == 06){
        monthDescription = 'June';
    }
    else if(month == 07){
        monthDescription = 'July';
    }
    else if(month == 08){
        monthDescription = 'August';
    }
    else if(month == 09){
        monthDescription = 'September';
    }
    else if(month == 10){
        monthDescription = 'October';
    }
    else if(month == 11){
        monthDescription = 'November';
    }
    else if(month == 12){
        monthDescription = 'December';
    }
    
    return console.log(`Olá, me chamo ${nameApresentation}, nasci no dia ${day[0]}, do mês ${monthDescription} do ano ${day[2]}.`);

}

apresentation('Jéssica', "18/05/1992");
