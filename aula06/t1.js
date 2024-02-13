let num = [1, 8, 7 ,2, 6]
num.push(9)
num.sort()
/*for (let pos = 0; pos < num.length; pos++ ){
    console.log(`O vetor da posição ${pos} é ${num[pos]}`)
} */
for ( let pos in num) {
    console.log(`O vetor de posição ${pos} é ${num[pos]}`)
}

let pro = num.indexOf(1)
if (pro == -1){
    console.log('O número não foi encontrado.')
}
else {
    console.log(`o número está na posição ${pro}`)
}