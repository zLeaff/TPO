const userName = document.getElementById('name_form'); 
const userLastName = document.getElementById('lastname_form');
const userPhone = document.getElementById('phone_form');
const userEmail = document.getElementById('email_form');
const comments = document.getElementById('comments_form');
const validForm = document.getElementById('valid_form');

const nameAlert = document.getElementById('name_alert')
const lastNameAlert= document.getElementById('lastname_alert')
const phoneAlert = document.getElementById('phone_alert')
const emailAlert = document.getElementById('email_alert') 
const commentsAlert = document.getElementById('comments_alert')

const redColor = ('#831111')
const orangeColor = ('#f7a062')

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact_form').addEventListener('submit', validarForm); 
});



const validarForm = (validacion) => {


    validacion.preventDefault();
    let letras = /^[a-zA-Z\u00C0-\u017F\s]+$/;
    let numeros = /^[0-9]+$/;

//Nombre
    
    if (userName.value.length <= 0) {
        userName.style.borderColor = (redColor)
        nameAlert.innerHTML = 'Campo Obligatorio.'
    } else if (!userName.value.match(letras)) {
        userName.style.borderColor = (redColor)
        nameAlert.innerHTML = 'Nombre inválido.'        
    } else {
        userName.style.borderColor = (orangeColor)
        nameAlert.innerHTML = ''
    }

//Apellido
    if (userLastName.value.length <= 0) {
        userLastName.style.borderColor = (redColor)
        lastNameAlert.innerHTML = 'Campo Obligatorio.'
    } else if (!userLastName.value.match(letras)) {
        userLastName.style.borderColor = (redColor)
        lastNameAlert.innerHTML = 'Apellido inválido.'
    } else {
        userLastName.style.borderColor = (orangeColor)
        lastNameAlert.innerHTML = ''
    }

//Telefono
    if (userPhone.value.length <= 0) {
        userPhone.style.borderColor = (redColor)
        phoneAlert.innerHTML = 'Campo Obligatorio.'
    } else if(!userPhone.value.match(numeros) || userPhone.value.length < 7){
        userPhone.style.borderColor = (redColor)
        phoneAlert.innerHTML = 'Teléfono inválido.'
    } else {
        userPhone.style.borderColor = (orangeColor)
        phoneAlert.innerHTML = ''
    }

//Email
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(userEmail.value.length <= 0) {
        userEmail.style.borderColor = (redColor)
        emailAlert.innerHTML  = 'Campo Obligatorio.'
    } else if(!emailRegex.test(userEmail.value)) {
        emailAlert.innerHTML  = 'Correo inválido.'
    } else {
        userEmail.style.borderColor = (orangeColor)
        emailAlert.innerHTML = ''
    }
        

//Comentarios
    if (comments.value.length <= 0) {
        comments.style.borderColor = (redColor)
        commentsAlert.innerHTML = 'Campo obligatorio.'
        return;
    } else {
        comments.style.borderColor = (orangeColor)
        commentsAlert.innerHTML = ''
    }
}

validarForm();