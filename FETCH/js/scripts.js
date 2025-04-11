// fetch(
//     "https://api.github.com/users/reginaldo007oliveira"
// )
// // .then(response => console.log(response))
// //faz a requisição da api pelo json e mostra no console
// .then(response => response.json())
// // faz o processamento e retorna uma por promessa ex data.bio data. só o data retorna todos
// .then(data => console.log("dados",data))

//fetch pegando os dados do GitHub
function fetchGitHubUser(username) {
	fetch(`https://api.github.com/users/${username}`)
		.then((response) => {
			if (!response.ok) {
				console.error(error);
				// throw new Error("Não foi possível realizar a requisição");
			}

			return response.json();
		})
		.then((user) => {
			console.log("user", user);
			createUserCard(user);
		})
//tratamento de erro
		.catch((error) => {
			console.error(error);
			const app = document.getElementById("app");
			app.innerHTML = `<p style='color:red'>Erro: ${error.message}</p>`;
		});
}
//passando parametro para funçao
// fetchGitHubUser("reginaldo007oliveira")

//FUNÇÃO PARA CRIAR O CARD DO USUÁRIO
function createUserCard(user) {
	const app = document.getElementById("app");

	const card = document.createElement("div");
	card.className = "card";

	const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login}'s avatar`;

	const name = document.createElement("h2");
	name.textContent = user.name;

	const login = document.createElement("p");
	login.textContent = `Login: @${user.login}`;

	card.appendChild(avatar);
	card.appendChild(name);
	card.appendChild(login);
	app.appendChild(card);
}
fetchGitHubUser("luciano");
