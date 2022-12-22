/*
  Padrões:
  - Funções começarão com letra minúscula
  - String com aspas simples ('') ou (``), apenas quando for necessário 
  - Variáveis camelCase
  - Ponto e Vírgula obrigatório
  */

let textoCripto = document.getElementById('texto-cripto');
let chave = document.getElementById('chave');
let textoResul = document.getElementById('texto-resul');

let codigoLetraA = 65;
let codigoLetraZ = 90;

let numeroLetra = codigoLetraA;

let lado = 0;

let animacaoPodeIniciar = true;

let interrogacao = document.getElementById('interrogacao');
let divAjuda = document.getElementById('div-ajuda');

// Isso aqui vou tirar
function cripto() {
  textoResul.style.color = 'white';
  textoResul.value = textoCripto.value;
}

function atualizarLetra() {
  chave.src = `img/chaves/Chave${String.fromCharCode(numeroLetra)}.png`;
  chave.alt = `${String.fromCharCode(numeroLetra)}`;
}

function aumentarLetra() {
  if (animacaoPodeIniciar) {
    if (numeroLetra < codigoLetraZ) {
      numeroLetra++;
    } else {
      numeroLetra = codigoLetraA;
    }

    if (chave.classList.contains('animacao-chave-esquerda')) {
      chave.classList.remove('animacao-chave-esquerda');
    }

    if (chave.classList.contains('animacao-chave-direita')) {
      chave.classList.remove('animacao-chave-direita');
      void chave.offsetWidth;
      chave.classList.add('animacao-chave-direita');
    }

    chave.classList.add('animacao-chave-direita');

    atualizarLetra();

    animacaoPodeIniciar = false;
  }
}

function diminuirLetra() {
  if (animacaoPodeIniciar) {
    if (numeroLetra > codigoLetraA) {
      numeroLetra--;
    } else {
      numeroLetra = codigoLetraZ;
    }

    if (chave.classList.contains('animacao-chave-direita')) {
      chave.classList.remove('animacao-chave-direita');
    }

    if (chave.classList.contains('animacao-chave-esquerda')) {
      chave.classList.remove('animacao-chave-esquerda');
      void chave.offsetWidth;
      chave.classList.add('animacao-chave-esquerda');
    }

    chave.classList.add('animacao-chave-esquerda');

    atualizarLetra();

    animacaoPodeIniciar = false;
  }
}

chave.addEventListener('animationend', () => {
  animacaoPodeIniciar = true;
});

// -------------------------------------

function setasPretas(lado) {
  if (lado == 'esquerda') {
    document.getElementById('seta-esquerda').src = 'img/SetaEP.png';
  } else if (lado == 'direita') {
    document.getElementById('seta-direita').src = 'img/SetaDP.png';
  }
}

function setasVerdes(lado) {
  if (lado == 'esquerda') {
    document.getElementById('seta-esquerda').src = 'img/SetaEV.png';
  } else if (lado == 'direita') {
    document.getElementById('seta-direita').src = 'img/SetaDV.png';
  }
}

// -----------------------------------

interrogacao.addEventListener('click', () => {
	divAjuda.style.display = "block";
});