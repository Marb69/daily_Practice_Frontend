let hamMenu = document.querySelector('.ham-menu');
let navMenu = document.querySelector('.nav-menu');
 let body = document.querySelector('body'); 
 let navlink = document.querySelector('.nav-link');
 let logo = document.querySelector('#logo');

function hamOpen(){

    
let hamAnimation = hamMenu.querySelectorAll('span');

 
    hamAnimation.forEach( span =>{
          span.classList.toggle('open');

        
    });

    let openBlur = document.querySelector('.open-blur-close');
    navMenu.classList.toggle('open-menu');
    openBlur.classList.toggle('open-blur');
    body.classList.toggle('disable');
   
    openBlur.addEventListener('click',function (){


          hamAnimation.forEach( span =>{
          span.classList.remove('open');
          
        
    });

        navMenu.classList.remove('open-menu');
        openBlur.classList.remove('open-blur');
         body.classList.remove('disable');
    });

     navMenu.addEventListener('click',function (){


          hamAnimation.forEach( span =>{
          span.classList.remove('open');

        
    });

        navMenu.classList.remove('open-menu');
        openBlur.classList.remove('open-blur');
           body.classList.remove('disable');
    });




    
}
 
hamMenu.addEventListener('click',hamOpen);