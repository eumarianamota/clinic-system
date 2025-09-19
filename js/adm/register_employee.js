document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        window.location.href = "register-confirmation.html"
    })
})