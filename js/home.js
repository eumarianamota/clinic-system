document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('login-form')
    const user = document.getElementById('user')
    const password = document.getElementById("password")
    const errorMessage = document.getElementById("error-message")

    form.addEventListener("submit",  (event) => {
        event.preventDefault()

        if (user.value === 'administrador' && password.value === "1234") {
            window.location.href = "./adm/adm.html"
        } else if (user.value === "recepcao" && password.value === "1234") {
            window.location.href = "reception/reception.html"
        } else if (user.value === "triagem" && password.value === "1234") {
            window.location.href = "screening/screening.html"
        } else if (user.value === "medico" && password.value === "1234") {
            window.location.href = "doctor/doctor.html"
        } else {
            errorMessage.textContent = "Usuário ou Senha inválidos!"
        }
    })
})