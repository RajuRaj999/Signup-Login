
const email=document.getElementById('login-em');

const password=document.getElementById('login-ps');

const form=document.getElementById('form');

const email_error=document.getElementById('email_error');

const pass_error=document.getElementById('pass_error');

form.addEventListener('submit',(e)=>
    {


     let email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let pass_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML="valid email is reqired";

    }
    else{
         email_error.innerHTML='';

    }

    if(!password.value.match(pass_check)){

        e.preventDefault();
        pass_error.innerHTML="Password is invalid";

    }
    else{
        pass_error.innerHTML='';

    }

})