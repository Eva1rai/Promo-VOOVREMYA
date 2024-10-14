document.addEventListener("DOMContentLoaded", function() {

});

document.addEventListener('DOMContentLoaded', function () {
    let background = document.getElementById('background');
    let typingText = document.getElementById('typing-text');
    let navbar = document.getElementById('navbar');
    let menuItem1 = document.getElementById('menu-item-1');
    let content = document.getElementById('content');

    // Функция для печатания текста
    function typeText(element, text, interval) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, interval);
            }
        }
        type();
    }
    
    // Появление фона
    setTimeout(() => {
        background.classList.remove('hidden');
    }, 500);

    // Появление текста с анимацией печатания
    setTimeout(() => {
        typingText.classList.remove('hidden');
        typingText.textContent = ''; // Очистить текст перед началом анимации
        typeText(typingText, 'ВООООООО\nОООООООО\nОООООООО\nОООВРЕМЯ', 100); //  \n - перенос
    }, 1000);

    // Появление навигации
    setTimeout(() => {
        if (navbar) {
            navbar.classList.remove('hidden');
        }
    }, 7000);

    // Исчезновение текста и добавление стиля меню
    setTimeout(() => {
        if (content) {
            content.classList.remove('hidden');
        }
        if (typingText) {
            typingText.classList.add('hidden');
        }
        if (menuItem1) {
            menuItem1.classList.add('bold');
        }
    }, 7000);

    document.getElementById('showdiv').addEventListener('click',function(){
        const mydiv=
        document.getElementById('mydiv');
        mydiv.classList.toggle('hidden')
    });

});