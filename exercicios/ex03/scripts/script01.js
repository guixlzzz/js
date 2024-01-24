function contar() {
    var ini = document.getElementById('inic')
    var fi = document.getElementById('ifim')
    var pas = document.getElementById('ipas')
    var res = document.getElementById('res')
    
    if (ini.value == 0 || fi.value == 0 ) {
        res.innerHTML = 'Impossível contar.'
    if (pas.value == 0) {
        window.alert('Impossível contar! Consideramos o passo como 1.')}
    } else {
        var  i = Number(i.value)
        var  p = Number(pas.value)
        var  f = Number(fi.value)
        res.innerHTML = `Contando...`
    } if ( i < f) {
    for ( var c = i ; c <= f ; c + p) {
        res.innerHTML +=  `${c}`
    }
}
}