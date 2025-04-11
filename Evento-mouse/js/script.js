const content = document.querySelector("#content");
const showButtom = document.querySelector("#show");
const hideButton = document.querySelector("#hide");
const hideShowButton = document.querySelector("#hideShowContent");

showButtom.addEventListener("click", () => {
    content.classList.add("show")
    content.classList.remove("hide")
})
//Evento com duplo clique dblclick mousedown( quando descer o botão ele executa) mouseup( soltar o botão) mousemove( só passar em cima ) mouseenter(quando entra na area do objeto) mouseleave(quando sai do objeto executa)
// hideButton.addEventListener("dblclick", () => {
//     content.classList.add("hide")
//     content.classList.remove("show")
// })
hideButton.addEventListener("dblclick", () => {
    content.classList.add("hide")
    content.classList.remove("show")
})

hideShowButton.addEventListener("click", () => {
    content.classList.toggle("hide")
    
})