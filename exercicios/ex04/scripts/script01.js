function Gerar() {
    let num = document.getElementById('int')
    let tabuada = document.getElementById('tabid')
    if (num.value == 0){
        window.alert('POR FAVOR DIGITE UM NÚMERO!')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            var p = document.getElementById('p')
            p.innerHTML = ''
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n * c} `
            tabuada.appendChild(item)
    
        } 
    }
}

