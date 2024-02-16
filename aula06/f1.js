/* SOMA
function soma ( n1 = 0, n2 = 0){
    return n1 + n2
}
console.log(soma(3))
*/
/* DOBRO
let v = function dobro(n) {
    return n * 2
}
console.log(v(2))
*/
/* FATORIAL
function fatorial(n) {
    
        let fat = 1
        for (let c = n; c > 1; c--) {
            fat *= c
        }
        return fat 
    }

console.log(fatorial(5))
*/
/* RECURSIVA
function fat(x) {
    if ( x == 1){
        return 1
    } else {
        return x * fat(x - 1)
    }
}
console.log(fat(5))
*/