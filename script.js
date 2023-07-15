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
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText= message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
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
        setSucess(firstName)
    }
}