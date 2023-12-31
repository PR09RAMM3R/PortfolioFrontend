let menu = document.querySelector('.hamburgerMenu');
let menuExit = document.querySelector('.exitMenu');
let menuOpen = document.querySelector('.hambergurMenuActive');
menu.addEventListener('click', function() {
    menuOpen.classList.add('active')
});
menuExit.addEventListener('click', function() {
    menuOpen.classList.remove('active')
})