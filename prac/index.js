
     let userName = document.querySelector("#uname");
        let password = document.querySelector("#password");
        let LogInButton = document.querySelector("#logInBtn");


        let newUname = document.querySelector("#Nuname");
        let iniPass = document.querySelector("#Npassword");
        let confirmp = document.querySelector("#ConPass");
        let createBtutton = document.querySelector("#CreateBtn");


        let cname;
        let cpass;
        let confirmPass;


        function createAccount (){


        
            cname = newUname.value;
            cpass = iniPass.value;
            confirmPass = confirmp.value;
            if(cpass.toLowercase()!==confirmPass.toLowercase()){


                alert("Confirm Password must be the same at Password");
            
            }

            return;
        }



