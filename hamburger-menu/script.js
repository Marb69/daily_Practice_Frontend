let hamburger = document.querySelector('.hamburger-menu');
let navlink = document.querySelector('.nav-link');
let body = document.querySelector('body');

hamburger.addEventListener('click',function (){


   hamburger.classList.toggle('active');
   navlink.classList.toggle('active');
});


