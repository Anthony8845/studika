const btn = document.querySelector('.nav__btn')
const navbar = document.querySelector('.navbar')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    navbar.classList.toggle('active')
})