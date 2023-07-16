const form= document.getElementById('form')
const firstName= document.getElementById('first-name')
const lastName= document.getElementById('last-name')
const email= document.getElementById('email');
const password = document.getElementById('password')
const passwordCheck = document.getElementById('password2')

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();
})


const setError=(element, message)=> {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText= message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const isValidEmail= (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs= ()=> {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();


    if (firstNameValue === ''){
        setError(firstName, 'First Name is Required')
    }else{
        setSuccess(firstName)
    }

    if (lastNameValue === ''){
        setError(lastName, 'Last Name is Required')
    }else{
        setSuccess(lastName)
    }

    if (emailValue === ''){
        setError(email, 'Email is required')
    }if (!isValidEmail(emailValue)){
        setError(email, 'Please provide a valid email address')
    }else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, 'Password is required')
    }if (passwordValue.length < 8){
        setError(password, 'Password must be more then 8 characters.')
    }else{
        setSuccess(password)
    }
  
    if (passwordValue !== passwordCheckValue){
        setError(passwordCheck, 'Passwords must match')
    }else if ( passwordCheckValue === ''){
        setError(passwordCheck, 'Please enter your password a second time.')
    }else if (passwordCheckValue.length < 8){
        setError(passwordCheck, 'Password must be more then 8 characters.')
    }else{
        setSuccess(passwordCheck)
    }

    
}

