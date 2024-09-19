let currentMode = '';

function showLogin(mode) {
    currentMode = mode;
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function authenticate() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (currentMode === 'admin' && login === "Daniil" && password === "QAZ7845") {
        document.getElementById('adminPanel').style.display = 'block';
        closeModal();
    } else if (currentMode === 'stats' && login === "user" && password === "password") {
        // Замініть на ваш логін та пароль
        alert("Доступ до статистики надано!");
        closeModal();
    } else if (currentMode === 'guide' && login === "user" && password === "password") {
        document.getElementById('guideModal').style.display = 'block';
        closeModal();
    } else {
        alert("Неправильний логін або пароль!");
    }
}

function showStatistics(moderator) {
    document.getElementById('statTitle').innerText = `Статистика для ${moderator}`;
    document.getElementById('statData').innerText = "Дані про статистику...";
    document.getElementById('statisticsModal').style.display = 'block';
}

function closeStatistics() {
    document.getElementById('statisticsModal').style.display = 'none';
}

function showContact() {
    alert("Контактна інформація");
}

function showModeratorForm() {
    alert("Форма для модератора");
}

function closeGuide() {
    document.getElementById('guideModal').style.display = 'none';
}
