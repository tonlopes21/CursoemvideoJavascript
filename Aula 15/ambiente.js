var num = [5, 8, 2, 9,3]
num.push(1) //Atenção na ordem que irá colocar no código, pois pode ir para o início ou final. 
num.sort()
console.log(num)

num[3] = 6 // A variável 3 não existe, neste momento está sendo criada uma nova e inserido um valor.
console.log(`O nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(8)

if(pos==-1){
    console.log(`O valor não foi encontrado`)
    
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

//caso não queira se preocupar com a posição que será inserido o novo valor, seguir com o comando abaixo:

//num.push(7)

// PARA SABER O TAMANHO DE UMA VARIÁVEL, BASTA USAR O ATRIBUTO ABAIXO. 
//num.length

//PARA ORDENAR OS VALORES DENTRO DE UMA VARIÁVEL, BASTA UTILIZAR O COMANDO ABAIXO.
//num.sort()



