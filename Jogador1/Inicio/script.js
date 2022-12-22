let divTitulo = document.getElementById('div-titulo')

function esconderTitulo() {
	divTitulo.style.opacity = "0";
}

divTitulo.addEventListener('transitionend', () => {
	divTitulo.style.zIndex = "-1";
});

function mudarPagina() {
	document.location.href = "../Aguardando/";
}