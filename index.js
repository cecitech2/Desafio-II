console.log("Cecitech2")

//declarar duas variáveis
let nickname = "Cecilia mestra do desafio heroi"
let quantidadeDeExperiencia = 1002
let medalha = ""

//laço de repetição

do { 
    console.log("Avance")
    quantidadeDeExperiencia++
} while (quantidadeDeExperiencia < 1003)
   
//declarar uma menssagem
    
console.log("A heroína de nome" +  nickname  + "está no nível de" + medalha)

//apresentar condições
if (quantidadeDeExperiencia < 1000){
    console.log("Ferro")
    }
    else if (quantidadeDeExperiencia > 1000  <= 2000){
    console.log("Bronze")    
    }
    else if (quantidadeDeExperiencia > 2000 <= 5000){
    console.log("Prata Ouro")
    }
    else if(quantidadeDeExperiencia > 5000 <= 8000){
    console.log("Platina Diamante")
    }
    else if(quantidadeDeExperiencia > 8000 <= 9000){
    console.log("Ascendente")
    }