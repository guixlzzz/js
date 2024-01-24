function Gerar() {
    var nt = document.getElementById('int')
    var res = document.getElementById('res')
    var nut = Number(nt.value)
    if (nt.value == 0 || nt.value == undefined) {
        window.alert('Por favor, selecione um número.')
    }
    var c = 1
    while (c <= 10){
        c++
        var r2 = nut * c
        res.innerHTML = `${nut} x ${c} = ${r2}`
    }
    }

}