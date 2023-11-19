function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    res.style.textAlign = "Center"
    if (fano.value == 0 || fano.value > ano) {
        window.alert("[ERRO] VERIFIQUE SEUS DADOS!")
    }
    else {
        var idd = ano - fano.value 
        var fsex = document.getElementsByName('isex')
        var gen = ''
        var img = document.createElement('img')
        if (fsex [0].checked) {
            gen = 'Homem'
        }  if (idd >=  0 && idd < 10) {
            img.setAttribute('src', 'img/fotomc.png')
            

        }  else if (idd <= 21) {
            img.setAttribute('src', 'img/fotomj.png')
        } else if ( idd <= 59) {
            img.setAttribute('src', 'img/fotoma.png')
        } else if (idd >= 60) {
            img.setAttribute('src', 'img/fotomi.png')
        } if (fsex [1].checked) {
            gen = 'Mulher'
        } 
        if (idd >=  0 && idd < 10) {
            img.setAttribute('src', 'img/fotofc.png')

        }  else if (idd <= 21) {
            img.setAttribute('src', 'img/fotofj.png')
        } else if ( idd <= 59) {
            img.setAttribute('src', 'img/fotofa.png')
        } else if (idd >= 60) {
            img.setAttribute('src', 'img/fotofi.png')
        } 
    }
    res.innerHTML = `Detectamos ${gen} com ${idd} anos.`
    res.appendChild(img)
}
