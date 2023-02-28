var body = document.body;

let divTitulo = document.getElementById('div-titulo');
let imagemTitulo = document.getElementById('imagem-titulo');
let start = document.getElementById('start');
let startPodeAparecer = false;

imagemTitulo.addEventListener('mouseenter', () => {
	body.style.setProperty('--opacidadeBodyBefore', '0');
	imagemTitulo.style.transform = 'translate(0px, -75px)';
	start.style.transform = 'translate(0px, 75px)';
});

imagemTitulo.addEventListener('transitionstart', () => {
	start.style.transition = 'opacity 500ms, transform 100ms';
	start.style.opacity = '1';
});

start.addEventListener('transitionend', () => {
	start.disabled = false;
});

function clique(){
	window.location = "../Jogador1/Criptografar/index.html"
}


