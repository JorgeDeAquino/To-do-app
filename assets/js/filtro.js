const filterBox = document.querySelector('.filtros');
const todoUl = document.querySelector('.tarefas');




function filtrosSelecionados(className = 'all') {
    const allTodo = [...todoUl.querySelectorAll('.tarefas__lista')];
    console.log(allTodo);

    switch (className) {
        case 'completed':
            if (todoUl.querySelectorAll('.completa').length === 0) {
                alert('No completed items left!');
                return;
            }
            allTodo.forEach(todo => {
                if (todo.classList.contains('completa')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
            });
            break;
        case 'active':
            if (todoUl.querySelectorAll('.completa').length === allTodo.length) {
                alert('No active items left!');
                return;
            }
            allTodo.forEach(todo => {
                if (!todo.classList.contains('completa')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
            })
            break;
        case 'all':
            allTodo.forEach(todo => {
                todo.removeAttribute('style');
            });
            break;
    }
}


function btnsFiltros(e) {
    e.preventDefault();
    const btnAll = this.querySelector('.all')
    const btnActive = this.querySelector('.active')
    const btnComplited = this.querySelector('.btn__completed')

    let refValue;

    if (e.target.classList.contains('btn__completed')) {
        refValue = 'completed';
        btnAll.classList.remove('ativado');
        btnActive.classList.remove('ativado');
        btnComplited.classList.add('ativado');
    } else if (e.target.classList.contains('active')) {
        refValue = 'active';
        btnAll.classList.remove('ativado');
        btnActive.classList.add('ativado');
        btnComplited.classList.remove('ativado');
    } else if (e.target.classList.contains('all')) {
        refValue = 'all';
        btnAll.classList.add('ativado');
        btnActive.classList.remove('ativado');
        btnComplited.classList.remove('ativado');
    }

    filtrosSelecionados(refValue);
}



filterBox.addEventListener('click', btnsFiltros);


