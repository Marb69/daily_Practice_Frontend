let doInput = document.querySelector('#do-input');
let addDo = document.querySelector('#add-Do');
let deleteDo = document.querySelector('#delete-Do');
let titledo = document.querySelector('.do');
let listMain = document.querySelector('#List-main');

function createdo (){

   
    if(!doInput.value){

        alert('Please fill-in');
        return true;
    }
        
 let newlist = document.createElement('li');
    let newdo = document.createElement('p');
    let newbtn = document.createElement('button');
    newlist.id = 'list';
    listMain.append(newlist);
     newdo.innerHTML = doInput.value;
   newdo.classList.add('do');
     newlist.append(newdo);
     newbtn.id = 'delete-Do';
     newbtn.innerHTML = 'Delete'
     newlist.append(newbtn);
    doInput.value = '';

   
     function deletedo(){

        let ok = confirm('Are you sure to delete this do?');

        if(ok){

             newlist.remove();
         return true;
        }
       
       
       
     }

     newbtn.addEventListener('click',deletedo);
     
}
     



addDo.addEventListener('click',createdo);

