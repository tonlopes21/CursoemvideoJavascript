var idade = 22
if (idade < 16) {
console.log('Não vota')
} else { //Nessa parte é criado o aninhamento de condição
    if (idade >=16 && idade < 18) {
        console.log('O voto é opcional') 
    }
} /*Será possível ler da seguinte forma: Se for verdadeiro, segue e se não for, 
segue outro caminho, e nesse outro caminho colocar condições */
if (idade >= 18) {
    console.log('O voto será obrigatório') /* Aqui foi criado o aninhamento, 
    pois está dentro da condição anterior.*/

}

