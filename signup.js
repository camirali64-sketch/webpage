const signupForm = document.getElementById("signup-form");
const saveMessage = document.getElementById("save-message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = {
        fullName: document.getElementById("full-name").value,
        email: document.getElementById("signup-email").value,
        password: document.getElementById("signup-password").value
    };

    localStorage.setItem("savedUser", JSON.stringify(user));
    saveMessage.textContent = "Account saved. You can now go to login.";
    signupForm.reset();
});
