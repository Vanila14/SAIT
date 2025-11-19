const startBtn = document.getElementById("startBtn");
const transitionCircle = document.querySelector(".transition-circle");

startBtn.addEventListener("click", () => {

transitionCircle.classList.add("active");
startBtn.disabled = true;

setTimeout(() => {
    window.location.href = "pages/levels.html";
}, 1000);
});

// Загружаем звук кнопки
const clickSound = new Howl({
    src: ['music/sounds/click.mp3'],
    volume: 1.5
});

// Находим кнопку по ID
document.getElementById('startBtn').addEventListener('click', () => {
    clickSound.play(); // проигрываем звук
});



