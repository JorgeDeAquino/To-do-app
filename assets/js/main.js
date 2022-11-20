//Declarações variaveis 
//input...
const todoForm = document.querySelector("#todo__form");
const inputNewTodo = document.querySelector("#todo__input")
const tarefaContainer = document.querySelector('.tarefas')

//funções

function criaItens () {


    const item = document.createElement('li')
    item.classList.add('tarefas__lista')

    const circulo = document.createElement('div') 
    circulo.classList.add('circulo')
    

    const descricao = document.createElement('h3') 
    descricao.classList.add('lista__descricao')

    descricao.textContent = 'Teste'

    const btnDelete = document.createElement('button') 
    btnDelete.classList.add('btn__tema')

    const imgDelete = document.createElement('img')
    imgDelete.setAttribute("src", "./assets/images/icon-cross.svg");

   
    
    btnDelete.appendChild(imgDelete)

    item.appendChild(circulo)
    item.appendChild(descricao)
    item.appendChild(btnDelete)
    

    tarefaContainer.append(item)

}


//eventos
