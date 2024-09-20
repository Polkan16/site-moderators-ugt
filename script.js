// Функція для відображення форми авторизації
function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
}

// Функція для авторизації
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Єдиний логін і пароль для авторизації
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        // Перенаправлення на нову сторінку після успішної авторизації
        window.location.href = 'dashboard.html';
    } else {
        // Показуємо повідомлення про помилку
        document.getElementById('errorMessage').textContent = 'Невірний логін або пароль!';
    }
}

// Функція для виходу
function logout() {
    // Перенаправлення на головну сторінку
    window.location.href = 'index.html';
}



// Функція для виходу
function logout() {
    window.location.href = 'index.html'; // Перенаправлення на головну сторінку
}
