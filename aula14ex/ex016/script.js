

function contar() {

var ini = document.getElementById(`txti`)
var fim = document.getElementById(`txtf`)
var passo = document.getElementById(`txtp`)
var res = document.getElementById(`res`) 

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

    window.alert(`[ERRO] Falta digitar os dados` )
    res.innerHTML = (`Impossível contar!`)
} else {

    res.innerHTML = `Contando: `

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(p<=0){
        alert(`Considere o passo a partir de 1`)
        p=1
    
    }if(i < f){
        // Contagem crescente
        for( var c = i; c <= f; c+=p) {

        res.innerHTML += ` ${c} \u{1F449}`
        }

    }else{
        // Contagem regressiva
        for( var c = i; c >= f; c-=p){

            res.innerHTML += ` ${c} \u{1F449}`

        }
    
        
    }
    res.innerHTML += `\u{1F61D}` /*Código do emoji foi conseguido 
    através do https://unicode.org/emoji/charts/full-emoji-list.html*/
    
    


}


}



