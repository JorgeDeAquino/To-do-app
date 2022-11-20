

let circuloSelecionado = document.querySelectorAll(".circulo");
let descricao = document.querySelectorAll(".lista__descricao")



function clica() {

    circuloSelecionado.forEach((elemento) => {

        elemento.addEventListener("click", function(event) {
            console.log('Entrando na função')
            event.target.classList.toggle("circulo__check");


            // if(elemento.classList.contains("circulo__check) {
            //   event.target.closest('h3').classList.toggle('lista__descricao')

            // }


        })

    })


}

clica()


