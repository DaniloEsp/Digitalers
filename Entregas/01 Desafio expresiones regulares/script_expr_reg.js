/*
Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/ 

let form = document.querySelector('#formulario');
let input = document.querySelector('#enviar');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valor = enviar.value;
    let pwd = /^[a-z+A-Z+0-9*]{12,30}$/
    if (pwd.test(valor)) {
        console.log('PWD VALIDO');
        alert('PWD VALIDO')
    }else{
        console.log('PWD INVALIDO');
        alert('PWD INVALIDO')
    }
});