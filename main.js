// Burger menu codes

let menu = document.querySelector('.hamburgerMenu'),
    menuExit = document.querySelector('.exitMenu'),
    menuOpen = document.querySelector('.hambergurMenuActive');
menu.addEventListener('click', function() {
    menuOpen.classList.add('active')
});
menuExit.addEventListener('click', function() {
    menuOpen.classList.remove('active')
})


// Head Title codes

let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Come Back :(';
})
window.addEventListener('focus', () => {
    document.title = docTitle;
})