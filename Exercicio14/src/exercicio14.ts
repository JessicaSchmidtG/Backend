//Escreva uma função para converter de números normais para algarismos romanos (`string`).

//Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram por
//centenas de anos. Inventaram estradas de concreto e até biquínis. Uma coisa que eles nunca descobriram 
//foi o número zero. Isso tornou a escrita e a datação de histórias extensas de suas façanhas um pouco 
//mais desafiadoras, mas o sistema de números que eles criaram ainda está em uso hoje. 
//Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter 
//números maiores que cerca de 3000. (Os próprios romanos não tendiam a ir mais alto)
//A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, 
//começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.
//Para ver isso na prática, considere o exemplo de 1990.
//Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC
let num:number = 1990;
let romanos=[
    {symbol: "M", value: 1000},
    {symbol: "CM", value: 900},
    {symbol: "D", value: 500},
    {symbol: "CD", value: 400},
    {symbol: "C", value: 100},
    {symbol: "XC", value: 90},
    {symbol: "L", value: 50},
    {symbol: "XL", value: 40},
    {symbol: "X", value: 10},
    {symbol: "IX", value: 9},
    {symbol: "V", value: 5},
    {symbol: "IV", value: 4},
    {symbol: "I", value: 1},
];
function convert(num: number): string{
    let numRom = " "
    for(const {symbol, value} of romanos){
        while(num>=value){
            num -=value;
            numRom += symbol
        }
    }
    return numRom;
}
console.log(convert(1992));