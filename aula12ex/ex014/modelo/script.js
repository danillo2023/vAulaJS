function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()  
    var hora = 13
    msg.innerHTML= `Agora são ${hora} horas.`
    if(hora >= 7 && hora < 12){
        //Bom dia !
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML= `Agora são ${hora} h , bom dia.`
    } else if (hora >= 12 && hora <= 18){
        //Boa tade !
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML= `Agora são ${hora} h ,Boa tarde.`

    }else if (hora >=18 && hora <= 24){
        //Boa noite !
        img.src = 'noite.jpg'
        document.body.style.background = '#515254'
        msg.innerHTML= `Agora são ${hora} h , Boa noite.`

    
    }else {
    //Boa madruada !
        img.src = 'madrugada.jpg'
        document.body.style.background = '#515254'
        msg.innerHTML= `Agora são ${hora} horas e tenha uma boa madrugada.`
    }
}


