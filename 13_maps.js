const valore = [2,3,6,9]

const users = [
    { id: 1, name: 'João', age: 45 },
    { id: 2, name: 'Paula', age: 85 },
    { id: 3, name: 'Marta', age: 27 },
    { id: 4, name: 'Luciano', age: 24 },
]

const valoreDobrados = valore.map(
    (valore) => valore * 2
)


const userNames = users.map(user=>user.name)

console.log(valore)
console.log(valoreDobrados)
console.log(userNames)