let valores = [1,7,3,8]
valores.sort()

//console.log(valores)//maneira simples e prática..

/*console.log(valores[0]) // maneira mais difícel..
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])


console.log(`Contem ${valores.length} posições.`)//length indica a quantidade de posições.

for(let pos=0; pos < valores.length; pos ++ ) { //Maneira que deve-se aprender.
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/

for ( let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
