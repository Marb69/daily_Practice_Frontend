function addItem(){


    let cc = document.getElementById('c-con');
    let pname = document.getElementById('pname').value;
    let desp = document.getElementById('des-p').value;
  


    let dp = document.createElement('card');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
   let btn = document.createElement('button');

    let dps = dp.appendChild(h1);
     let de =  dp.appendChild(p);
     
     let but = dp.appendChild(btn);
     but.innerHTML = 'delete';
     but.onclick = function(){

         dp.remove();
     }


    dps.innerHTML = pname;
    de.innerHTML = desp;
  
    
     
  

    cc.appendChild(dp);

    
}