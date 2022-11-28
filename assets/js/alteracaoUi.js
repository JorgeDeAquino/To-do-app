const actions = document.querySelector('.acoes');
const clearCompletedBtn = document.querySelector('.btn__limpar__campos');
const page = document.querySelector('main');


// changing the UI while resizing the window
function changeUI() {
    const filterBox = document.querySelector('.filtros');
    if (window.innerWidth > 1024) {
        actions.insertBefore(filterBox, clearCompletedBtn);
        filterBox.classList.add('lFiltros')
    } else {
        page.insertBefore(filterBox, document.querySelector('.ref'));
        filterBox.classList.remove('lFiltros');
    }
}

// event listeners
window.addEventListener('DOMContentLoaded', () => {
    changeUI();
});

window.addEventListener('resize', changeUI);