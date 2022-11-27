const changeThemeBtn = document.querySelector(".btn__tema");
const icone = document.querySelector("#icone");
const bodyDark = document.querySelector('body');


// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

changeThemeBtn.addEventListener("click", function () {
  toggleDarkMode();

  if(bodyDark.classList.contains('dark')) {
    icone.setAttribute('src', './assets/images/icon-sun.svg');
  } else {
    icone.setAttribute('src', './assets/images/icon-moon.svg');
  }
});
