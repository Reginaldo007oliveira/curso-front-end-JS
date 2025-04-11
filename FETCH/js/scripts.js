fetch(
    "https://api.github.com/users/reginaldo007oliveira"
)
// .then(response => console.log(response))
//faz a requisição da api pelo json
.then(response => response.json())
// faz o processamento e retorna uma por promessa ex data.bio data. só o data retorna todos
.then(data => console.log("dados",data))