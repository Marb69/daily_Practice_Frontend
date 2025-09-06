let task = document.querySelector('#task');
let addTask = document.querySelector('#addTask');
let listMain = document.querySelector('#list-parent');

addTask.addEventListener('click',function(){


    if(!task.value){

        alert('Must be fill');
        return true;
    }
 
    let newtask = document.createElement('li');
    newtask.classList.add('list');
    listMain.append(newtask);

    let taskname = document.createElement('p');
        taskname.classList.add('task-name');
         taskname.innerHTML = task.value ;
        newtask.append(taskname);
       
   let newdltBtn = document.createElement('span');

   newdltBtn.classList.add('delete-btn');
   newdltBtn.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
   newtask.append(newdltBtn);

    taskname.addEventListener('click',function(){

           taskname.classList.toggle('done');
    });

   newdltBtn.addEventListener('click',function (){


           let confirmation = confirm('Are you sure to delete this task?');
           if(confirmation){

               newtask.remove();
               return true;
           }

   });
 
   task.value = '';
});




