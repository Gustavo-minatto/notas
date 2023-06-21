
let student = prompt("Qual é seu nome?")
let n1 = prompt("Qual é sua primeira nota?")
let n2 = prompt("Qual é sua segunda nota?")
let n3 = prompt("Qual é sua terceira nota?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if(result){ 
  alert("Parabens " + student + " Sua media é de: " + average + " voce foi aprovado!")
}else if(average <3){
  alert("VOCE FOI REPROVADO SUA MEDIA FOI " + average)
}else{
  alert("Infelizmente sua media foi: " + average + " Estude para a recuperação")
}