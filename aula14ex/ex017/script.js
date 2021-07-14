function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var n = Number(num.value)

    if (num.value.length == 0) {
        alert('[ERRO] Por favor, digite um número!')
    } else {
        
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }


    }
}