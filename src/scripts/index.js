import '../styles/styles.css';
import '../sass/styles.scss';

let btnBurger = document.getElementById('show');
let burger = document.querySelector('.burger');
let exit = document.getElementById('exit');



btnBurger.addEventListener('click', function(){
    burger.classList.remove('burger');
    burger.classList.add('burger__active');
})

exit.addEventListener('click', function(){
    burger.classList.remove('burger__active');
    burger.classList.add('burger');
})

let btnCallBack = document.getElementById('showCallback');
let btnCallBacks = document.getElementById('showsCallback');
let callback = document.querySelector('.callback');
let closedCallback = document.getElementById('closedCallback');

btnCallBack.addEventListener('click', function(){
    callback.classList.remove('callback');
    callback.classList.add('callback__active');
})

btnCallBacks.addEventListener('click', function(){
    callback.classList.remove('callback');
    callback.classList.add('callback__active');
})

closedCallback.addEventListener('click', function(){
    callback.classList.remove('callback__active');
    callback.classList.add('callback');
})

let btnCall = document.getElementById('callShow');
let btnCalls = document.getElementById('callShows');
let call = document.querySelector('.call');
let closedCall = document.getElementById('callClosed');

btnCall.addEventListener('click', function(){
    call.classList.remove('call');
    call.classList.add('call__active');
})

btnCalls.addEventListener('click', function(){
    call.classList.remove('call');
    call.classList.add('call__active');
})

closedCall.addEventListener('click', function(){
    call.classList.remove('call__active');
    call.classList.add('call');
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

const servicesListShow = document.getElementById('list_show');
const servicesListClose = document.getElementById('list_close');
const servicesListCards = document.querySelectorAll('.services__list_card');
const servicesCardsList = document.querySelectorAll('.services__cards-item');
const servicesCardsShow = document.getElementById('cards_show');
const servicesCardsClose = document.getElementById('cards_close');
const showButton = document.querySelector('.show-button');
const hideButton = document.querySelector('.hide-button');
const showButton2 = document.querySelector('.show-button2');
const hideButton2 = document.querySelector('.hide-button2');
let cardsToShow = servicesListCards.length; // Изначально отображаем все элементы
let cardsToShow2 = servicesCardsList.length; // Изначально отображаем все элементы

// Функция для отображения определенного количества элементов
function displayCards() {
    servicesListCards.forEach((card, index) => {
        if (index < cardsToShow) {
            card.style.display = 'flex'; // Отображаем элемент
        } else {
            card.style.display = 'none'; // Скрываем элемент
        }
    });
}

// Функция для отображения определенного количества элементов
function displayCards2() {
    servicesCardsList.forEach((card, index) => {
        if (index < cardsToShow2) {
            card.style.display = 'flex'; // Отображаем элемент
        } else {
            card.style.display = 'none'; // Скрываем элемент
        }
    });
}

// Функция для отображения всех элементов
servicesListShow.addEventListener('click', function showAllCards() {
    cardsToShow = servicesListCards.length; // Показываем все элементы
    displayCards();
    showButton.style.display = 'none'; // Скрываем кнопку "Показать все"
    hideButton.style.display = 'block'; // Показываем кнопку "Скрыть"
}) 

// Функция для отображения всех элементов
servicesCardsShow.addEventListener('click', function showAllCards2() {
    cardsToShow2 = servicesCardsList.length; // Показываем все элементы
    displayCards2();
    showButton2.style.display = 'none'; // Скрываем кнопку "Показать все"
    hideButton2.style.display = 'block'; // Показываем кнопку "Скрыть"
})

servicesListClose.addEventListener('click', function closedList() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        cardsToShow = 6; // Отображаем только 6 элементов по умолчанию
    }
    if (window.matchMedia('(min-width: 1120px)').matches) {
        cardsToShow = 8; // Отображаем только 8 элементов по умолчанию
    }
    displayCards();
    showButton.style.display = 'block'; // Показываем кнопку "Показать все"
    hideButton.style.display = 'none'; // Скрываем кнопку "Скрыть"
})

servicesCardsClose.addEventListener('click', function closedCards() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        cardsToShow2 = 3; // Отображаем только 6 элементов по умолчанию
    }
    if (window.matchMedia('(min-width: 1120px)').matches) {
        cardsToShow2 = 4; // Отображаем только 8 элементов по умолчанию
    }
    displayCards2();
    showButton2.style.display = 'block'; // Показываем кнопку "Показать все"
    hideButton2.style.display = 'none'; // Скрываем кнопку "Скрыть"
})

// Функция для скрытия лишних элементов
function hideExtraCards() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        cardsToShow = 6; // Отображаем только 6 элементов по умолчанию
    }
    if (window.matchMedia('(min-width: 1120px)').matches) {
        cardsToShow = 8; // Отображаем только 8 элементов по умолчанию
    }
    displayCards();
    showButton.style.display = 'block'; // Показываем кнопку "Показать все"
    hideButton.style.display = 'none'; // Скрываем кнопку "Скрыть"
}

// Функция для скрытия лишних элементов
function hideExtraCards2() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        cardsToShow2 = 3; // Отображаем только 6 элементов по умолчанию
    }
    if (window.matchMedia('(min-width: 1120px)').matches) {
        cardsToShow2 = 4; // Отображаем только 8 элементов по умолчанию
    }
    displayCards2();
    showButton2.style.display = 'block'; // Показываем кнопку "Показать все"
    hideButton2.style.display = 'none'; // Скрываем кнопку "Скрыть"
}

// Вызываем функцию displayCards() при загрузке страницы
displayCards();

// Вызываем функцию displayCards() при загрузке страницы
displayCards2();

// Медиа-запрос для экранов шириной 320px
if (window.matchMedia('(min-width: 320px)').matches) {
    cardsToShow = servicesListCards.length; // Отображаем все элементы по умолчанию
    showButton.style.display = 'none'; // Скрываем кнопку "Показать все"
    hideButton.style.display = 'none'; // Скрываем кнопку "Скрыть"
    showButton2.style.display = 'none'; // Скрываем кнопку "Показать все"
    hideButton2.style.display = 'none'; // Скрываем кнопку "Скрыть"
    scrollCarousel(1); // Скроллим карусель на первый элемент
    scrollCarousel2(1); // Скроллим карусель на первый элемент
    scrollCarousel3(1); // Скроллим карусель на первый элемент
}
// Медиа-запрос для экранов шириной 768px
if (window.matchMedia('(min-width: 768px)').matches) {
  cardsToShow = 6; // Отображаем только 6 элементов по умолчанию
  cardsToShow2 = 3; // Отображаем только 6 элементов по умолчанию
  hideExtraCards(); // Скрываем лишние элементы
  hideExtraCards2(); // Скрываем лишние элементы
}
// Медиа-запрос для экранов шириной 1120px
if (window.matchMedia('(min-width: 1120px)').matches) {
  cardsToShow = 8; // Отображаем только 8 элементов по умолчанию
  hideExtraCards(); // Скрываем лишние элементы
}

function scrollCarousel(index) {
    const carousel = document.querySelector('.services__list');
    let cardWidth = 240;
    carousel.scrollLeft = (index - 1) * cardWidth;
}

function scrollCarousel2(index) {
    const carousel = document.querySelector('.services__cards');
    let cardWidth = 280;
    carousel.scrollLeft = (index - 1) * cardWidth;
}

function scrollCarousel3(index) {
    const carousel = document.querySelector('.services__price');
    let cardWidth = 285;
    carousel.scrollLeft = (index - 1) * cardWidth;
}