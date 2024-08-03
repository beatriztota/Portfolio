const frases = [ 'Desenvolvedora Front-End','Front-End Developer'];
const typewriter = document.querySelector('.efeito-texto');

let indexFraseAtual = 0;
let indexLetraAtual = 0;

function digitarProximaLetra() {
  if (indexLetraAtual < frases[indexFraseAtual].length) {
    typewriter.textContent += frases[indexFraseAtual][indexLetraAtual];
    indexLetraAtual++;
    setTimeout(digitarProximaLetra, 50); 
  } else {
    setTimeout(apagarTexto, 1500); 
  }
}

function apagarTexto() {
  if (typewriter.textContent.length > 0) {
    typewriter.textContent = typewriter.textContent.slice(0, -1);
    setTimeout(apagarTexto, 25); 
  } else {
    indexFraseAtual = (indexFraseAtual + 1) % frases.length;
    indexLetraAtual = 0;
    setTimeout(digitarProximaLetra, 500); 
  }
}

digitarProximaLetra(); 
