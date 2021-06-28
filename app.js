const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navigation-desk');


hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})