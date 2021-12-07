//Função fatorial 
//5! = 5*4*3*2*1=120

function fatorial (num) {
  let fat = 1
  for(let cont = num; cont > 1; cont --){
    fat *= cont
  }
  return(fat)
}
console.log(fatorial(5))