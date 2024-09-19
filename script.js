function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function authenticate() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    if (login === "Daniil" && password === "QAZ7845") {
        // Відкрити адмін панель або статистику
        alert("Вітаємо в адмін панелі!");
    } else {
        alert("Неправильний логін або пароль!");
    }
}
