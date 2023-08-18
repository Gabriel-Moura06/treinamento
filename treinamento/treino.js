const nome = "Gabriel"; 


//Atividade 3


// Função para obter um evento aleatório
function getEventoAleatorio() {
  // Gerando um número aleatório entre 0 e 2
  const numeroAleatorio = Math.floor(Math.random() * 3);

  
  if (numeroAleatorio === 0) {
    return "Maratona";
  } else if (numeroAleatorio === 1) {
    return "Triathlon";
  } else {
    return "Pentathlon";
  }
}

const eventoEscolhido = getEventoAleatorio();
console.log("Evento escolhido: " + eventoEscolhido);



//Atividade 4



  



function getDiasTreino(evento) {
  if (evento === "Maratona") {
    return 50;
  } else if (evento === "Triathlon") {
    return 100;
  } else if (evento === "Pentathlon") {
    return 200;
  } else {
    return "Evento desconhecido";
  }
}


const EventoEscolhido = getEventoAleatorio();


const diasTreino = getDiasTreino(eventoEscolhido);


console.log("Para o evento " + eventoEscolhido + ", você terá " + diasTreino + " dias de treino.");


//Atividade 5


function logEvento(nome, evento) {
  console.log(nome + " vai participar do evento " + evento + ".");
}


function logTempo(nome, dias) {
  console.log(nome + " vai treinar por " + dias + " dias.");
}

const EventoEscolhidO = getEventoAleatorio();


const DiasTreino = getDiasTreino(eventoEscolhido);


logEvento(nome, eventoEscolhido);
logTempo(nome, diasTreino);
