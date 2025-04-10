const valore = [2,3,6,9]

const users = [
    { id: 1, name: 'João', age: 45 },
    { id: 2, name: 'Paula', age: 85 },
    { id: 3, name: 'Marta', age: 14 },
    { id: 4, name: 'Luciano', age: 24 },
]
const numerosMaioresQueCinco = valore.filter(num => num >=5)
const numerosPares = valore.filter(num => num % 2 === 0)
const menoresDeIdade = users.filter(user => user.age < 18)
console.log(numerosMaioresQueCinco)
console.log(numerosPares)
console.log(menoresDeIdade)