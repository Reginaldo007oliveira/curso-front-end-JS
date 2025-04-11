const inputForm = document.querySelector("#busca");
const botaoBusca = document.querySelector("#botaoBusca");
const resultadoDiv = document.querySelector("#resultado");
// const valorBusca = document.querySelector("#resultado");
//evento de teclado key mostra a tecla que vc precionou
inputForm.addEventListener("keydown", (e) => {
	console.log(e.key);
});

inputForm.addEventListener("focus", (e) => {
	inputForm.style.backgroundColor = "#FF0";
});

inputForm.addEventListener("blur", (e) => {
	inputForm.style.backgroundColor = "";
});

function searchResult() {
	const valorBusca = inputForm.value.trim();
	if (valorBusca) {
		resultadoDiv.textContent = `Você buscou: ${valorBusca}`;
		// fetch(`https://api.github.com/users/${valorBusca}`) 
        // testContent usar para colocar conteudo em forma de texto
	} else {
        resultadoDiv.textContent = "Por favor, insira algo na busca."
	}
}
// aqui é feita a relação com o Id do html e passando a função para 
botaoBusca.addEventListener("click", (e) =>{
    searchResult()
})