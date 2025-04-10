// biome-ignore lint/style/useConst: <explanation>
//dados estruturados
const nome = "Luciano"
const lastName = "bora"
const idade = 57
const peso = 2.10
const altura = 3.20
const frutas = ["banana", "maça", "mamão", 20]

const usuario = {
    nome: "Luciano",
    lastName: "bora bora",
    idade: 57,
    
}
console.log(` A soma do peso mais a altura é ${peso + altura }...`)
console.log(`Olá, ${nome} ${lastName} ${idade} ${peso} é minha idade`)
console.log("frutas", frutas)
console.log(frutas[2])
console.log(usuario.lastName)
console.log(usuario)
