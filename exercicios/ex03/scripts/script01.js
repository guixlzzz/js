function contar() {
    var ini = document.getElementById('inic')
    var fi = document.getElementById('ifim')
    var pas = document.getElementById('ipas')
    var res = document.getElementById('res')
    if( ini.value == 0 || fi.value == 0) {
        alert("[ERRO] DADOS INSUSFICIENTES!")
    } else {
        var f = Number(fi.value)
        var i = Number(ini.value)
        var p = Number(pas.value)
        res.innerHTML = `Contando: `
    } if( p == 0){
        p = 1
        alert('[ERRO] CONSIDERAMOS O PASSO 1')
    } 
    if(f > i) { 
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for(c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        
    }
    res.innerHTML += `\u{1F3C1}`
}