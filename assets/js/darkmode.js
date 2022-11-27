// temaBtn = document.querySelector('.btn__tema');

// class Tema {
//     constructor() {
//         this.html = document.documentElement;
//         this.html.dataset.theme = `theme-light`;
//         this.temaBtn = document.querySelector('.btn__tema');

//         this.temaBtn.addEventListener('click',this.trocarTema)
//     }
// }


// function trocarTema() {
//     const themeIcon = temaBtn.querySelector('img');

//     if (temaBtn.classList.contains('light')) {
//         temaBtn.classList.remove('light');
//         temaBtn.classList.add('dark');
//         document.dataset = 'theme-dark';
//         themeIcon.src = './images/icon-sun.svg';
//         themeIcon.alt = 'moon svg';
//     } else {
//         temaBtn.classList.remove('dark');
//         temaBtn.classList.add('light');
//         document.dataset = 'theme-light';
//         themeIcon.src = './images/icon-moon.svg';
//         themeIcon.alt = 'sun svg';
//     }

// }


// class temaInicial {
//     static init() {
//         new Tema();
//     }
// }

// temaInicial.init();


const changeThemeBtn = document.querySelector(".btn__tema");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

changeThemeBtn.addEventListener("click", function () {
  toggleDarkMode();

});


