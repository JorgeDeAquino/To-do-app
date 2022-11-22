let circuloSelecionado = document.querySelectorAll(".circulo");
let descricao = document.querySelectorAll(".lista__descricao");


document.addEventListener('click', (e) => {


    //local onde foi clicado
    const targetEl = e.target;
    //div pai do elemento clicado
    const parentEl = targetEl.closest("li");

    //capturando elemento ckechbox 
    if(targetEl.classList.contains("circulo")) {
        //add class completa no li
        parentEl.classList.toggle("completa");

        //add class check
        targetEl.classList.toggle("circulo__check");
    };

    atualizaContador() //chama função que atualiza os itens ativos no contador

})

atualizaContador()



// function clica() {

//     circuloSelecionado.forEach((elemento) => {

//         elemento.addEventListener("click", function(event) {
//             event.target.classList.toggle("circulo__check");


//             // if(elemento.classList.contains("circulo__check) {
//             //   event.target.closest('h3').classList.toggle('lista__descricao')

//             // }


//         })

//     })


// }

// clica()
