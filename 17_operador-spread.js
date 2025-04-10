//copiar um array
const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1]; // copia o array1 para array2
console.log(array2); // [1, 2, 3, 4, 5

//concatenar arrays
const numeros =[1,2,3,4]
const numeros2 =[5,6,7,8]
const arrayConcatenados =[...numeros2,...numeros]
console.log(arrayConcatenados); // [1, 2, 3, 4,


//adicionando elementos no array
const novoArray = [10,...arrayConcatenados,]
console.log(novoArray); // [10, 1, 2, 3,

//Objetos
const usuario = {nome:"Ana", idade:30}
const copiaUsuario = {...usuario, nome:"João"} // copia o objeto usuario e adicion
console.log(copiaUsuario); // {nome: "João", idade: 30}

//Modificando objetos
const usuarioAtualizado= {...usuario, idade:31, cidade:"Floripa"}
console.log(usuarioAtualizado); // {nome: "Ana", idade: 30, cidade:

//novos dados do usuário
const novoUsuario = {nome:"João", idade: 34}
const usuarios={...usuario, novoUsuario}
console.log(usuarios); // {nome: "Ana", idade: 30, novoUsuario:

