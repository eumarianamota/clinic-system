document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form") 

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const submitter = event.submitter.id

        if (submitter == "submit-register-btn") {
            window.location.href = "register-confirmation.html"
        } else if (submitter == "submit-screening-btn") {
            window.location.href = "screening-confirmation.html"
        }
    })
})