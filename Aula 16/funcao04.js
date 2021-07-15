// PARA CALCULAR O FATORIAL DE UM NÚMERO
// 5! = 5 x 4 x 3 x 2 x 1
function fatorial(n){ //VAI RECEBER UM NÚMERO E VAI RETORNAR O FATORIAL DELE
    var fat = 1
    for(var c = n;c>1;c--){ //enquanto o contador for maior que 1, ele perderá 1
        fat *= c // No final colocará o fatorial * C (Contador)

    }
    return fat 
}
console.log(fatorial(5))
