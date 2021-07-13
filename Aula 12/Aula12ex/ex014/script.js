function carregar() {
    var msg = window.document.getElementById('msg') /*Através desta função irá buscar a mensagem*/
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 20//data.getHours() /*Ao tirar o "//" poderá utilizar a hora do exato momento.*/

    
    msg.innerHTML = `Agora são ${hora} horas` /*Através do innerHTML irá trazer o conteúdo do "id"*/
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png' /*Irá buscar a imagem que foi salva*/
        document.body.style.background = '#FEA523' /*Com a ajuda do corel, irá buscar 
        este código da cor na imagem "#FEA523*/
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#260F05' /*Com a ajuda do corel, irá buscar 
        este código da cor na imagem "#FEA523*/
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#2877B4' /*Com a ajuda do corel, irá buscar 
        este código da cor na imagem "#FEA523*/
    }
    
    

}
