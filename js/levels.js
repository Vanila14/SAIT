// === Разрешение AudioContext в браузере ===
window.addEventListener('click', () => {
    try {
        if (Howler.ctx && Howler.ctx.state === 'suspended') {
            Howler.ctx.resume().then(() => {
                console.log("%c[AUDIO] AudioContext разблокирован", "color: green");
            });
        }
    } catch (e) {
        console.warn("[AUDIO] Не удалось резюмить AudioContext:", e);
    }
}, { once: true });

document.addEventListener('DOMContentLoaded', () => {
    console.log("%c[INIT] DOM загружен", "color: cyan");

    const backBtn = document.querySelector('.back-btn');


    // === Звуки ===
    const clickSound = new Howl({ 
        src: ['/music/sounds/click.mp3'], 
        volume: 1.5,
        onload: () => console.log("%c[AUDIO] click.mp3 загружен", "color: lightgreen")
    });
 
    
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("%c[BACK] Нажата кнопка Назад", "color: lightblue");

            // Проигрываем звук
            
            clickSound.play();

            // Создаем overlay, чтобы пользователь видел задержку
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = '#000';
            overlay.style.opacity = '0.05';
            overlay.style.zIndex = '9999';
            document.body.appendChild(overlay);

            // Ждем 2 секунды (длина клика) перед переходом
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        });
    }
});
