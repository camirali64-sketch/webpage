const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("savedUser"));
    const email = loginForm.elements.gmail.value;
    const password = loginForm.elements.password.value;

    if (savedUser && savedUser.email === email && savedUser.password === password) {
        window.location.href = "homepage.html";
        return;
    }

    loginMessage.textContent = "User or password is wrong.";
});
