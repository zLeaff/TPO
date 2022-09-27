const userName = document.getElementById("name_form"); 
const userLastName = document.getElementById("lastname_form");
const userPhone = document.getElementById("phone_form");
const userEmail = document.getElementById("email_form");
const comments = document.getElementById("comments_form");
const validForm = document.getElementById("valid_form");

const nameAlert = document.getElementById("name_alert")
const lastNameAlert= document.getElementById("lastname_alert")
const phoneAlert = document.getElementById("phone_alert")
const emailAlert = document.getElementById("email_alert") 
const commentsAlert = document.getElementById("comments_alert")

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact_form").addEventListener('submit', validarForm); 
});



const validarForm = (validacion) => {


    validacion.preventDefault();
    let letras = /^[a-zA-Z\u00C0-\u017F\s]+$/;
    let numeros = /^[0-9]+$/;

//Nombre
    
    if (userName.value.length <= 0) {
        userName.style.borderColor = ("#d34309")
        nameAlert.innerHTML = "Campo Obligatorio."
    } else if (!userName.value.match(letras)) {
        userName.style.borderColor = ("#d34309")
        nameAlert.innerHTML = "Nombre inválido."        
    } else {
        userName.style.borderColor = ("#f7a062")
        nameAlert.innerHTML = ""
    }

//Apellido
    if (userLastName.value.length <= 0) {
        userLastName.style.borderColor = ("#d34309")
        lastNameAlert.innerHTML = "Campo Obligatorio."
    } else if (!userLastName.value.match(letras)) {
        userLastName.style.borderColor = ("#d34309")
        lastNameAlert.innerHTML = "Apellido inválido."
    } else {
        userLastName.style.borderColor = ("#f7a062")
        lastNameAlert.innerHTML = ""
    }

//Telefono
    if (userPhone.value.length <= 0) {
        userPhone.style.borderColor = ("#d34309")
        phoneAlert.innerHTML = "Campo Obligatorio."
    } else if(!userPhone.value.match(numeros) || userPhone.value.length < 7){
        userPhone.style.borderColor = ("#d34309")
        phoneAlert.innerHTML = "Teléfono inválido."
    } else {
        userPhone.style.borderColor = ("#f7a062")
        phoneAlert.innerHTML = ""
    }

//Email
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(userEmail.value.length <= 0) {
        userEmail.style.borderColor = ("#d34309")
        emailAlert.innerHTML  = "Campo Obligatorio."
    } else if(!emailRegex.test(userEmail.value)) {
        emailAlert.innerHTML  = "Correo inválido."
    } else {
        userEmail.style.borderColor = ("#f7a062")
        emailAlert.innerHTML = ""
    }
        

//Comentarios
    if (comments.value.length <= 0) {
        comments.style.borderColor = ("#d34309")
        commentsAlert.innerHTML = "Campo obligatorio."
        return;
    } else {
        comments.style.borderColor = ("#f7a062")
        commentsAlert.innerHTML = ""
    }
}

validarForm();