function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto') 
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                res.innerHTML = `É uma criança com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/menino.png')
                res.appendChild(img)
            } else if (idade < 21){
                res.innerHTML = `É um jovem com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/jovemm.png')
                res.appendChild(img)
            } else if (idade < 50) {
                res.innerHTML = `É um adulto com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/homem.png')
                res.appendChild(img)
            } else {
                res.innerHTML = `É um sénior com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/idoso.png')
                res.appendChild(img)
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                res.innerHTML = `É uma criança com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/menina.png')
                res.appendChild(img)
            } else if (idade < 21){
                res.innerHTML = `É uma jovem com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/mulher.png')
                res.appendChild(img)
            } else if (idade < 50) {
                res.innerHTML = `É uma adulta com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/mulher_1.png')
                res.appendChild(img)
            } else {
                res.innerHTML = `É uma sénior com ${idade} anos.`
                img.setAttribute('src', '/Parte_3/imagens/idosa.png')
                res.appendChild(img)
            }
        }
    }
   // res.innerHTML = `Detetamos ${genero} com ${idade}.`

 }
    