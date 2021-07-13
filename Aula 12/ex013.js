/**Se essa expressão for o primeiro valor, executa o primeiro bloco, se não for, 
 * executa o segundo bloco, se não for, executa o terceiro bloco.... 
 * (O “default” funciona como o “else”, pois se nenhum bloco for satisfeito, 
 * a expressão irá utilizar ele. Dentro de cada bloco, é necessário colocar o 
 * comando “break”, muito importante, ele é obrigatório. Nele é que o código 
 * passa para a etapa de finalização após executar o código
 *  dentro do bloco, caso ele não exista, o código passa para os seguintes blocos. */ 

var agora = new Date()
var diaSem = agora.getDay()
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
//console.log(`Hoje é ${diaSem}`)

switch(diaSem){
    case 0: 
    console.log(`Domingo`)
    break
    case 1:
        console.log(`Segunda-feira`)
        break
    case 2:
        console.log(`Terça-feira`)
        break
    case 3:
        console.log(`Quarta-feira`)
        break
    case 4:
        console.log(`Quinta-feira`)
        break
    case 5:
        console.log(`Sexta-feira`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`Dia inválido`)
     
}