const formulario = document.querySelector('#form')
const email = document.getElementById('email')
let emailRecibido = ""
email.addEventListener('blur', validarFormulario)

function validarFormulario(e) {
    emailRecibido = e.target.value
}

formulario.addEventListener('submit', enviarFormulario)

function enviarFormulario(e) {
    e.preventDefault()
    localStorage.setItem('correo', emailRecibido)
}