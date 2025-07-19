
 let num = document.getElementById('num');
 let dec = document.getElementById('dec');
 let reach = document.getElementById('reac');
 let body = document.getElementsByTagName('body')[0];
    let number = 0;


function add(){

   
if(Number(number)>=0){
  
        dec.style.display = 'inline';
}


if(Number(number)>=9){
    
    body.style.backgroundColor = "Green";
    reach.innerHTML = "You Reach 10 backgroundColor is green";
    num.style.color = 'green';
     reach.style.color = 'white';
}
 if(Number(number)>=10){

    body.style.backgroundColor = 'white';
     num.style.color = 'black';
      reach.innerHTML = "";
}
    
    number++;

    num.innerHTML = number;
}

function minus(){

   

    
    number--;
    
    num.innerHTML = number;
 
    if(Number(number)>=11){
         body.style.backgroundColor = 'white';
     num.style.color = 'black';
       reach.innerHTML = "";
    }
if(Number(number)>=9){
    
    body.style.backgroundColor = "Green";
    reach.innerHTML = "You Reach 10 backgroundColor is green";
     num.style.color = 'green';
    reach.style.color = 'white';
}
 if(Number(number)<10){

    body.style.backgroundColor = 'white';
     num.style.color = 'black';
       reach.innerHTML = "";
}
      if(Number(number)===0){

       
        dec.style.display = 'none';
        
 
    }
   
    
}

  