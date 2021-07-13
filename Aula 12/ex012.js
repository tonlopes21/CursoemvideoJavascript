/*Exercício para dar Bom dia, boa tarde e boa noite através das condições if, else, else if*/


var agora = new Date()
var hora = agora.getHours() /*É utilizada esta forma para pegar a hora atual. 
1º Cria-se a variável "agora" para receber o "new Date()" e na variável "hora"
 irá receber o "agora.gethours()"*/
console.log(`Agora são ${hora} horas.`)
if (hora < 12 ) {
    console.log(`Bom dia!`)
}
else if (hora <=18){
    console.log(`Boa tarde!`)
}
else {
    console.log(`Boa noite!`)
}




