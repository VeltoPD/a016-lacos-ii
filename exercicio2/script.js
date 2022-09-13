const input = +prompt("Digite um número para imprimir a tabuada:")
let dezena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (let i in dezena) {
    console.log(`${input} x ${dezena[i]} = ${input * dezena[i]}`)
}