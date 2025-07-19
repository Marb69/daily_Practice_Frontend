let hammenu = document.querySelector('.ham-menu');
let nav = document.querySelector('nav');

hammenu.addEventListener('click',function (){


    hammenu.classList.toggle('active');
    nav.classList.toggle('active');
});