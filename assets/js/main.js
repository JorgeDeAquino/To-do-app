//Declarações variaveis 
//input...
const todoForm = document.querySelector("#todo__form")
const inputNewTodo = document.querySelector("#todo__input")
const tarefaContainer = document.querySelector('.tarefas')
const circulos = document.querySelectorAll('.circulo')

//funções

function criaItens () {


    const item = document.createElement('li')
    item.classList.add('tarefas__lista')

    const circulo = document.createElement('div') 
    circulo.classList.add('circulo')
    

    const descricao = document.createElement('h3') 
    descricao.classList.add('lista__descricao')


   descricao.textContent = inputNewTodo.value

    const btnDelete = document.createElement('button') 
    btnDelete.classList.add('btn__tema')
    
    const imgDelete = document.createElement('img')
    imgDelete.setAttribute("src", "./assets/images/icon-cross.svg");
    imgDelete.classList.add('img__remove')


    
    btnDelete.appendChild(imgDelete)

    item.appendChild(circulo)
    item.appendChild(descricao)
    item.appendChild(btnDelete)
    

    tarefaContainer.append(item) 

}

//função que mostra os itens ativos no canto inferior da tela 
function atualizaContador () {

    //seleciona os itens completos e mostra na tela quantos faltam para serem completos
    //diferença de total - completos
    const contador = document.querySelector('#itens__restantes--contador')
    const circuloLista = document.querySelectorAll('.circulo__check')
    console.log(circuloLista);

    contador.textContent = tarefaContainer.childElementCount - circuloLista.length
    
}


//eventos

todoForm.addEventListener('submit', function(evento) {
    
    evento.preventDefault()

    atualizaContador() //chama função que atualiza os itens ativos no contador

    
})

inputNewTodo.addEventListener('keypress', function(evento){

    if(evento.which == 13 && evento.code !== "") {

        criaItens()
        inputNewTodo.value = "";
     }

})

