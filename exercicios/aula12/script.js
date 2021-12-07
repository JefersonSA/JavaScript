let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res') //não se esqueça de criar a variavel do res..
let valores = []  //Vetor declarção de valores..

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100){
     return true
  } else {
     return false
  }

}
 
function inLista(n, l) { 
  if (l.indexOf(Number(n)) != -1) { //!  quer dizer não..
    return true
  } else {
    return false
  }

}

function adicionar() { //Uma função onde serão criadas duas variaveis..
  if(isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value)) //Adicionar um valor. Com push
      let item = document.createElement('option') //Adicionar um OPTION
      item.text = `Valor ${num.value} adicionado.` //item com interpolação.
      lista.appendChild(item) // Adicionar na lista Child/filho
      res.innerHTML = '' //Apos ser cadastrado, limpar campo.
      
  } else {
      window.alert('Valor inválido ou ja encontrado na lista.')
  }
  num.value = '' //Apagar apos digitar na caixa do adicionar.
  num.focus() //Apagar, e mouse voltar apagar..
  
} 

function finalizar() {
  if (valores.length == 0) {
  window.alert('Adicione valores antes de finalizar!')
} else {
   let tot = valores.length
   let maior = valores[0]
   let menor = valores[0]
   let soma = 0
   let media = 0

   for(let pos in valores) { //Array incalação de todos let,pos,in, valores.
    for(let pos in valores) {
      soma += valores[pos]
    }
     if (valores[pos]  > maior)
        maior = valores[pos]
     if (valores[pos]< menor)
        menor = valores[pos]  
   }
   media = soma / tot
   res.innerHTML = ''
   res.innerHTML += `<p>Ao todo, temo ${tot} números cadastrados.</p>`
   res.innerHTML += `<p>o maior valor informado foi ${maior}.</p>`
   res.innerHTML += `<p>o menor valor informado foi ${menor}.</p>`
   res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
   res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
   
}

}