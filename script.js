

let listaDeEstudantes = [
  {
    nomeDoEstudante: 'Murilo',
    primeiraNota: 8,
    segundaNota: 9,
  },
  {
    nomeDoEstudante: 'Meire',
    primeiraNota: 7,
    segundaNota: 6.7,
  },
    {
    nomeDoEstudante: 'Pedro',
    primeiraNota: 6,
    segundaNota: 7,
  },
  {
    nomeDoEstudante: 'Rose',
    primeiraNota: 7,
    segundaNota: 8,
  },
  {
    nomeDoEstudante: 'João',
    primeiraNota: 4,
    segundaNota: 10,
  },
]

function calMedia(primeiraNota,segundaNota) {
  let media = (primeiraNota + segundaNota) / 2
  return media 
}

for(let estudante of listaDeEstudantes){
  mediaIndividual = calMedia(estudante.primeiraNota, estudante.segundaNota)
  let aprovOrNot = mediaIndividual <7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'
  
  alert(`A media de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
  ${aprovOrNot}`)
}
