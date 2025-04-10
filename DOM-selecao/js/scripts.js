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