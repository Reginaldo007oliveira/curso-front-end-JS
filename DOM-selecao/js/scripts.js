// //seleção por ID
const content = document.getElementById("content")
// // console.log("Contente", content)
// content.innerHTML=` <p> Parágrafo de textocc </p>`;
// content.style.backgroundColor="#f00"
// content.style.fontSize = "30px"

//seleção por classe
const classText = document.getElementsByClassName("text")
 console.log("ClassText", classText)  
 
 for(text of classText){
    text.style.color = "blue"
 }

 //seleção por tag
 const titles = document.getElementsByTagName("h2")
 console.log("Titles", titles)
 for(title of titles){
    title.style.fontSize = "66px"
 }

 const elementFeature = document.querySelector("#feature")



 const newElement = document.createElement("p")
 newElement.textContent = "Este é um novo parágrafo"
 elementFeature.appendChild(newElement)
// modifica o texto
;

 document.body.insertBefore(newElement, elementFeature)
//query selectorAll
const links = document.querySelectorAll("#links a")

console.log("Links", links)

for(link of links){
    link.classList.add("feature-links")
}


