

const name=document.getElementById('sign-na');

const email=document.getElementById('sign-em');

const password=document.getElementById('sign-ps');

const form=document.getElementById('form');

const name_error=document.getElementById('name_error');

const email_error=document.getElementById('email_error');

const pass_error=document.getElementById('pass_error');


form.addEventListener('submit',(e)=>
{

    let email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let pass_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


    if(name.value === '' || name.value == null){
        e.preventDefault();
        name_error.innerHTML="Name is required";


    }
    else{
        name_error.innerHTML="";
    }


    if(!email.value.match(email_check))
        {
         e.preventDefault();
        email_error.innerHTML="Valid email is required";

    }
    else{
        email_error.innerHTML="";
    }

    if(!password.value.match(pass_check))
        {
         e.preventDefault();
        pass_error.innerHTML="Valid Password is required";

    }
     else{
        pass_error.innerHTML="";
    }



})
































// document.getElementById("sign-lo").addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent form from submitting

//         const name = document.getElementById("sign-na").value.trim();
//         const email = document.getElementById("sign-em").value.trim();
//         const password = document.getElementById("sign-ps").value;

//         // Name: only capital letters A–Z
//         const nameRegex = /^[A-Z\s]+$/;

//         // Email: standard email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         // Password: 8-20 chars, at least one symbol
//         const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/;

//         if (!nameRegex.test(name)) {
//             alert("Name must be in capital letters only (A–Z).");
//             return;
//         }

//         if (!emailRegex.test(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         if (!passwordRegex.test(password)) {
//             alert("Password must be 8-20 characters and include at least one symbol.");
//             return;
//         }

//         alert("Signup successful!");
//         // You can now submit the form or redirect
//         // document.querySelector("form").submit();
//     });

