document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("register-btn")
    console.log("Botão registrado com sucesso!")

    registerBtn.addEventListener("click", () => {
        console.log("Tô clicando.")
        window.location.href = "register-patient.html"
    })
})