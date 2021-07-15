/*Funciona com o paradigma “funcional”. São tarefas.
Toda função tem que ter uma “chamada”.
O parâmetro é o que é necessário para atingir o objetivo.
Ação é o que é feito para atingir o objetivo
O objetivo é o retorno, o objetivo alcançado.
Uma função em javascript precisa ter apenas um retorno.
	NÃO É DIFÍCIL*/

function parimp(n){
    if(n%2==0){
        return `par`
    }else {
        return `ímpar!`
    }
}

var res = parimp(223)
console.log(res)



