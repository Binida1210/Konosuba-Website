const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav-list');


openBtn.addEventListener('click', () => {
    navBar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('active');
});