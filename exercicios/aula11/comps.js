let num = [2,4,6,9]
num.sort()//Colocar na ordem...
num.push(7)//Adicionar número no Final...

console.log(num)
console.log(`O primeiro valor do número ${num[1]}`)//Expecificar o número da casa.
console.log(`O vetor tem  ${num.length} posições.`) //length serve para saber quantos número tem.

let pos = num.indexOf(6)//Encontre um número. //coresponde a organização feita.
if (pos == -1) {
  console.log('O valor não foi encontrado!') 
} else {
  console.log(`O valor está na posição ${pos}`)
}