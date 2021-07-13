function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById(`txtano`) 
    var res = window.document.getElementById(`res`)
/*Se o usuário não digitou o ano ou então o ano é maior que o atual */
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] - Refaça a digitação e tente novamente`)
    }else{
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade > 0 && idade < 10) {
                //Criança
                img.setAttribute(`src`, `Foto - Bebê - H.png`)
            }else if (idade >= 10 && idade < 21){
                //Jovem Adolescente
                img.setAttribute(`src`,`Foto - Adolescente - H.png`)
            }else if (idade <50) {
                //Adulto
                img.setAttribute(`src`, `Foto - Adulto - H.png`)

            } else {
                //idoso
                img.setAttribute(`src`,`Foto - Idoso - H.png`)
            }
            
        }else if (fsex[1].checked){
            gênero = `Mulher`

            if (idade > 0 && idade < 10) {
                //Criança
                img.setAttribute(`src`, `Foto - Bebê - M.png`)
            }else if (idade >= 10 && idade < 21){
                //Jovem Adolescente
                img.setAttribute(`src`,`Foto - Adolescente - M.png`)
            }else if (idade <50) {
                //Adulto
                img.setAttribute(`src`, `Foto - Adulto - M.png`)

            } else {
                //idoso
                img.setAttribute(`src`,`Foto - Idoso - M.png`)
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img) /*Após adicionar todas as imagens em um if, deve colocar este comando para apresentar*/

    
    }


}


    
    
