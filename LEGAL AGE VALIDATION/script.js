function result(){




    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = document.getElementById('age').value;
    let result = document.getElementById('result');


    if( Number(age)<18){

        result.innerHTML = fname +" "+ lname + " Ikaw ay di pasado";
        document.getElementsByTagName('body')[0].style.backgroundColor = "red";

    }

    else{

        result.innerHTML = fname + " "+lname + "ikaw ay pasado";
         document.getElementsByTagName('body')[0].style.backgroundColor = " rgb(111, 216, 19)";
        
    }

}