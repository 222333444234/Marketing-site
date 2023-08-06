burger = document.querySelector('.burger');
navbar = document.querySelector('.nav-bar');
left_nav = document.querySelector('.left-nav');
right_nav = document.querySelector('.right-nav');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    left_nav.classList.toggle('v-class');
    right_nav.classList.toggle('v-class');
})