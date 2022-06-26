var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');

function validateName(){
       var name = document.getElementById('name').value;

       if(name.length == 0){
        nameError.innerHTML = 'Se requiere el nombre completo';
        return false;
       }
       if(!name.match(/\D[A-Za-zÁÉÍÓÚáéíóú]{3}/)){
        nameError.innerHTML = 'Escribe nombre';
        return false;
       }
       nameError.innerHTML = 'valido';
       return true;

}
function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Se requiere número de teléfono";
        return false;
    }
    if (phone.length !== 10){
        phoneError.innerHTML = "Número de teléfono de 10 dígitos";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML= "Se requiere número de teléfono";
        return false;
    }
    phoneError.innerHTML = 'Válido'
        return true;

}
function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Se requiere Email'
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Email inválido"
        return false;
    }
    emailError.innerHTML = "Válido";
    return true;

}
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + "Se requiren más caracteres";
        return false;
    }

    messageError.innerHTML = "Válido";
    return true;

}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Arreglar error antes de pulsar Submit";
        setTimeout(function(){submitError.style.display = "none';"}, 3000);
        return false;
    }
}
