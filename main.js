// cursor 

let rings = document.querySelectorAll('.ring');
window.addEventListener('mousemove', function (e) {
  rings.forEach((ring) => {
    ring.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
  });
});

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
