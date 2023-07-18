let btnBurger = document.getElementById('show');
let burger = document.querySelector('.burger');
let exit = document.getElementById('exit');


btnBurger.addEventListener('click', function(){
    burger.classList.toggle('active');
})

exit.addEventListener('click', function(){
    burger.classList.toggle('active');
})

// Получаем ссылки на элементы радио и меток
let option1 = document.getElementById("ru");
let option2 = document.getElementById("en");
let option3 = document.getElementById("ch");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");

// Добавляем обработчики событий для изменения текста метки
option1.addEventListener("change", function() {
    if (option1.checked) {
        label1.textContent = "RU";
        label2.textContent = "en";
        label3.textContent = "ch";
    }
});

option2.addEventListener("change", function() {
    if (option2.checked) {
        label1.textContent = "ru";
        label2.textContent = "EN";
        label3.textContent = "ch";
    }
});

option3.addEventListener("change", function() {
    if (option3.checked) {
        label1.textContent = "ru";
        label2.textContent = "en";
        label3.textContent = "CH";
    }
});