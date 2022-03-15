import {main, slideNumber, sliderImageTracker, width, imageList, characterName} from "./const/const.js";

// Переменная состояния:
let counter = 0;

// Функция стилизации и отрисовки "Дорожки" с изображениями
RenderImageList();

function RenderImageList() {

    // Задаем ширину sliderImageTracker в зависимсоти от длины imageList 
    sliderImageTracker.style.width = `${width * imageList.length}px`;


    // Код, отвечающий за вставку изображений массива в sliderImageTracker
    let str = "";
    for (let i of imageList) {
        str = str + `<img src="${i.img}" loading="lazy">`;
    }
    sliderImageTracker.innerHTML = str;

    // Задания одинаковой ширины (константа width) всем изображениям внутри sliderImageTracker
    sliderImageTracker.querySelectorAll(".slider__image__tracker img").forEach(i => i.style.width = width + "px");
}


// функция отрисовки кнопок слайдера
RenderButtonList()

function RenderButtonList() {

    let str = "";

    // Синхронизируем состояние массива imageList с количеством кнопок
    imageList.forEach((item, index) => {
        str = str + `<div class="btnsWrapper__item">
            <img src="${item.img}" loading="lazy" class="btnsWrapper__item_img" id=${index}>
        </div>`;
    })        

    btnsWrapper.innerHTML = str;
}


// Функция с объектом Event, позволяющая определить на каком элементе произошло событие "click"
main.onclick = function(event) {

    // доступ к свойству classList элемента, на котором произошло событие "click"
    let target = event.target.classList; 

    // С помощью Switch - задаем условия изменения переменной counter   
    switch (true) {
        case target.contains("slider__right_icon"):
            counter++;
            break;
        case target.contains("slider__left_icon"):
            counter--;
            break;
        case target.contains("btnsWrapper__item_img"):
            counter = +event.target.id
            break;
        default:
            alert("Используйте кнопки управления для переключения слайдов");
            break;     
    }

    // Задаем граничные условия изменения переменной counter (ограничиваемся длиной массива imageList)
    if (counter === imageList.length)
        counter = 0;
    if (counter < 0)
        counter = imageList.length - 1;

    // Вызов функции
    transition();
};


// Функция перемещения дорожки слайдов (sliderImageTracker) по оси X,
function transition() {
    slideNumber.textContent = `Слайд ${counter + 1}`;
    characterName.textContent = imageList[counter].name;
    sliderImageTracker.style.transform = `translateX(-${counter*width}px`;
}


