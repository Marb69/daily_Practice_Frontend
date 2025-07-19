let pname = document.querySelector('#pname');
let des = document.querySelector('#Description');
let price = document.querySelector('#price');
let addProj = document.querySelector('#addProject');
let deleteproj = document.querySelector('#deleteproj');
let cardcontainer = document.querySelector('.card-wrap');
     

addProj.addEventListener('click', function (){


           if(pname.value==="" || des.value==="" || price.value===""){

        alert("Please input");
    }
    else{


        let cprojectname = document.querySelector('#Projectname')
         let cdes = document.querySelector("#desc")
        let cPrice = document.querySelector("#Price")

      let card = document.createElement('div');
     card.classList.add('card');
        cardcontainer.append(card);


          
        
        let newname = document.createElement('h3');
         newname.id = 'Projectname';
        card.append(newname);
         newname.innerText = pname.value;
      
          let newdes = document.createElement('p');
         newdes.id = 'desc';
        card.append(newdes);
         newdes.innerText = des.value;

          let newprice = document.createElement('p');
        newprice.id = 'Price';
          card.append(newprice);
         newprice.innerText = '$' + price.value;

          let newbtn = document.createElement('button');
         newbtn.id = 'deleteProduct';
        card.append(newbtn);
          newbtn.innerHTML = 'Delete'

          newbtn.addEventListener('click',function (){

            card.remove();
                          
    
                       });


    }
});


