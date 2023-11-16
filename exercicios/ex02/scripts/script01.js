function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    if(Number(fano.value) >= ano) {
        alert('[ERRO] VERIFIQUE SEUS DADOS!')
    }
}
