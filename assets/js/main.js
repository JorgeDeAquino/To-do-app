//Declarações variaveis 
//input...
const todoForm = document.querySelector("#todo__form");
const inputNewTodo = document.querySelector("#todo__input")

//funções




//eventos



let circuloSelecionado = document.querySelector(".circulo");

circuloSelecionado.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("circulo__check");
});
