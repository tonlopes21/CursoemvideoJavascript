var num = [2,4,6,8,9]
num.sort()

/*console.log(num[1])

for(pos=0;pos<num.length;pos++){

    console.log(`A posição é ${pos} e o valor que está dentro da posição é ${num[pos]}`)


}
*/
for(var pos in num){ //Crio uma variável, e em seguida uso a outra variável. 
    console.log((`A posição ${pos} tem o valor ${num[pos]}`))
}


