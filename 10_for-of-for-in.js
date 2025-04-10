let frutas = ["banana","mamao","abacate","pessego","limao"]

// for( let fruta of frutas){
//     console.log(fruta)
// }

let pessoa = {nome:"João", idade:55, genero:"masculino"}
for(let key in pessoa){
    console.log(key + " " + pessoa[key])
}