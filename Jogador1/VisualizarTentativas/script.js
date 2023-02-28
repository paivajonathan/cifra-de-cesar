let divMain = document.getElementById('main');
let divTemporizador = document.getElementById('div-temporizador');
let containerTentativas = document.getElementById('container-tentativas');
let vazio = document.getElementById('vazio');

// Script de teste, usado para criar divs no clique do temporizador
divTemporizador.addEventListener('click', () => {
	let divTentativa = document.createElement('div');
	divTentativa.className = 'div-tentativa';

	// Com isso, a div 'Aguardando...' some completamente
	vazio.style.display = 'none';

	// Aqui fica o texto da div criada
	let node = document.createTextNode('Essa é uma tentativa');
	divTentativa.appendChild(node);

	containerTentativas.appendChild(divTentativa);
});


