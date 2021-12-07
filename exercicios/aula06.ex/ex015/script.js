function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.lenght == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero =  ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >=0 && idade < 10) {
               //Criança
               img.setAttribute('src', 'homem-bebe-m.png')
           } else if (idade <22) {
               //Jovem
               img.setAttribute('src', 'homem-jovem-m.png')
           } else if (idade < 50){
               //Adulto
               img.setAttribute('src', 'homem-adulta-m.png')
           } else {
                // Idoso
                img.setAttribute('src', 'homem-velho-m.png')
           }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >=0 && idade < 10) {
            //Criança
                img.setAttribute('src', 'mulher-bebe-f.png')
            } else if (idade <22) {
            //Jovem
                img.setAttribute('src', 'mulher-jovem-f.png')
            } else if (idade < 50){
            //Adulto
                img.setAttribute('src', 'mulher-adulta-f.png')
            } else {
             // Idoso
                img.setAttribute('src', 'mulher-velha-f.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
   }
}