function calcular(){
        
    let tn1 = document.querySelector('#TN1')
    let tn2 = document.querySelector('#TN2')
    let res = document.querySelector('#res')

    let peso = Number(TN1.value)
    let altura = Number(TN2.value)
    let resultado = peso/Math.pow(altura,2)

    document.querySelector('#res').style.display='flex'


    if (resultado < 18.5){
     
        res.innerHTML = `Seu IMC é: ${resultado.toFixed(2)} então você está fraco(a)`
    }

    else if (resultado >= 18.5 && resultado <= 24.9) {

         return (res.innerHTML = `Seu IMC é: ${resultado.toFixed(2)} então você tem um peso normal`)
    }
    
    else if (resultado >24.9 && resultado <= 29.9) {

        return(res.innerHTML = `Seu IMC é: ${resultado.toFixed(2)} então você está acima do peso`)
    }

    else if (resultado >29.9 && resultado <= 34.9) {

        return(res.innerHTML = `Seu IMC é: ${resultado.toFixed(2)} então você está com obesidade Grau 1`)
    }

    else if (resultado >34.9 && resultado <= 39.9) {

        return(res.innerHTML = `Seu IMC é: ${resultado.toFixed(2)} então você está com obesidade Grau 2`)
    }

    else {

        return(res.innerHTML = `Seu IMC é: ${resultado.toFixed(2)} então você está com obesidade Grau 3 ou Mórbida`)
    }

  



   }