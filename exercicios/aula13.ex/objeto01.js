let amigo = 
{nome: 'Jeferson', 
sexo: 'M', 
peso: 62.4, 
engordar(p=0){
  console.log('Engordou')
  this.peso += p 

}
}
amigo.engordar(9)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)


document.