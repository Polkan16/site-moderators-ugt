// Показати форму авторизації
function showLoginForm() {
    document.getElementById("loginForm").classList.remove("hidden");
}

// Сховати форму авторизації
function hideLoginForm() {
    document.getElementById("loginForm").classList.add("hidden");
}

// Імітація входу
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "12345") {
        alert("Вхід успішний!");
        hideLoginForm(); // Закриваємо форму після успішного входу
    } else {
        errorMessage.textContent = "Невірний логін або пароль!";
    }
}
