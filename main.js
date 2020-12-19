// Menu
const toggle = document.querySelector('.toggle'),
    menu = document.querySelector('.list'),
    links = document.querySelectorAll('.link');

// Menu show
toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    })    
})