document.addEventListener('click', (e) => {
    //local onde foi clicado
    const targetEl = e.target;
    //div pai do elemento clicado
    const parentEl = targetEl.closest("li");

    //capturando elemento ckechbox 
    if(targetEl.classList.contains("img__remove")) {
        //remove item
        parentEl.remove();

    };

    atualizaContador() //chama função que atualiza os itens ativos no contador

})
