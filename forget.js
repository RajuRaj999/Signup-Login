
const email=document.getElementById('in');

const form=document.getElementById('form');

const email_error=document.getElementById('email_error');

form.addEventListener('submit',(e)=>
    {


     let email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML="valid email is reqired";

    }
    else{
         email_error.innerHTML='';

    }
}
)
