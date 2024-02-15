let n = [1, 2, 7, 9, 5, 8]
n.push(6)
n.sort()
console.log(n)
console.log(n.indexOf(6))
for(let pos in n) {
    console.log(`O número da posição ${pos} é ${n[pos]}`)
}

