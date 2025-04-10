// let minhaVariavelGloval = "Eu sou uma variável global"

// function minhaFuncao(){
//     console.log(minhaVariavelGloval)
// }
// minhaFuncao()


function escopo(){
    let variavelLocal = "Eu sou uma variável local"
    console.log(variavelLocal)
}
escopo()
// console.log(variavelLocal) // não funciona pois a variável foi declarada dentro do escopo de bloco se for chamada fora do  escopo do bloco não é reconhecida               
// console.log(variavelLocal)