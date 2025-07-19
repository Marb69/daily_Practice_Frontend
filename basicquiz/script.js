function SUB(){



    let ans1 = document.getElementById('an1').value;
     let ans2 = document.getElementById('an2').value;
      let ans3 = document.getElementById('an3').value;
       let ans4 = document.getElementById('an4').value;
        let ans5 = document.getElementById('an5').value;
        let bc = document.getElementsByTagName('body')[0];
        let score = document.getElementById('score');
        let valid = document.getElementById('valid');
             let correct = 0;
             let perfect = document.getElementById('per');

             if(ans1=="" || ans2=="" || ans3=="" || ans4=="" || ans5==""){

                alert("Empty Input");
                
             }

             else{



                
        if(ans1.toLowerCase()==="css"){

            correct++;
        
        }

      if(ans2.toLowerCase()==="javascript"){

           correct++;

        }

            if(ans3.toLowerCase()==="html"){

            correct++;

            }
            if(ans4.toLowerCase()==="jhon"){

            correct++;

            }
            if(ans5.toLowerCase()==="november"){

            correct++;

            }
            else{

            correct = 0;
            }


        if(Number(correct)===0){

            bc.style.backgroundColor = 'red';
             score.innerHTML = correct + ("/5");
             score.style.color = 'white';
            perfect.innerHTML = 'Classmate taka?';
            valid.innerHTML = 'IT Ka?'
        }

         if(Number(correct)>=1 ){

               bc.style.backgroundColor = 'orange';
              score.innerHTML = correct + ("/5");
             score.style.color = 'black';
                perfect.innerHTML = 'Okay ra';

        }

    if(Number(correct)>=3 ){

               bc.style.backgroundColor = 'yellow';
             
           score.innerHTML = correct + ("/5");
             score.style.color = 'black';
   perfect.innerHTML = 'GOODS NA';
        }
      if(Number(correct)===5 ){

               bc.style.backgroundColor = 'blue';
             score.innerHTML = correct + ("/5");
             score.style.color = 'White';
                    perfect.innerHTML = 'PERFECT';

        }

               }

}

  (function () {
    emailjs.init("3rSua0AFXHkcuFiri");
  })();

  document.getElementById("feedback").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_rridear", "template_nxlkjxw", this)
      .then(function () {
        alert("Impas ka hehehhe thank you");
      }, function (error) {
        alert("Failed to send! " + error.text);
      });
  });