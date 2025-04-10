const valores = [2, 3, 6, 9];

const products = [
	{ name: "cadeira", price: 4 },
	{ name: "mesa", price: 500 },
	{ name: "fogao", price: 165 },
	{ name: "geladeira", price: 2 },
];

//soma total dos valores
const somaTotalDosValores = valores.reduce((acc, val) => acc + val, 0);
console.log(somaTotalDosValores); // 20

// soma de todos os produtos
const somaTotalDosProdutos = products.reduce((acc, val) => acc + val.price,0)
console.log(somaTotalDosProdutos); // 161
