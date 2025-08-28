const form = document.getElementById('form')
const user = document.getElementById('user')
const password = document.getElementById("password")
const errorMessage = document.getElementById("error-message")

form.addEventListener('submit',  (event) => {
    event.preventDefault()

    if (user.value === 'administrador' && password.value === "1234") {
        window.location.href = "manager.html"
    } else if (user.value === "recepcao" && password.value === "1234") {
        window.location.href = "reception.html"
    } else if (user.value === "triagem" && password.value === "1234") {
        window.location.href = "triage.html"
    } else if (user.value === "medico" && password.value === "1234") {
        window.location.href = "doctor.html"
    } else {
        errorMessage.textContent = "Usuário ou Senha inválidos!"
    }
})