
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var mnt = data.getMinutes()
    var s = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas e ${mnt} minutos e ${s} segundos.`;
    if (hora > 5 && hora < 12) {
        img.src = 'imagem/tarde.png';
        document.body.style.background = '#f1f12add';
    }
    else if (hora >= 12 && hora < 17) {
        img.src = 'imagem/manha.png';
        document.body.style.background = '#f9b22d';
    }
    else {
        img.src = 'imagem/nooite.png';
        document.body.style.background = '#7d217d72';
    }
}
