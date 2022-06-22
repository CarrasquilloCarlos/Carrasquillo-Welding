
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
let regex= /^[\d,\s,\+,\-]{5,20}/;

form.addEventListener('submit', (e) => {
  let messages = []
  if (nombre.value === '' || nombre.value == null) {
    messages.push('Name is required')
  }
  if (phone.value ==''){
      alert('Por favor entrar un numero de telefono')

  }
     else if(phone.value.match(regex)) 
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)

}


