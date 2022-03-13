// Получение DOM - элементов со страницы:

// Главный контейнер страницы
const main = document.body.querySelector("main");

// контейнер всех элементов слайдера
const slider = document.querySelector(".slider");

// контейнер для изображений слайдера
const sliderImage = slider.querySelector(".slider__image");

// "Дорожка" с изображениями (должна иметь свойство "display: flex")
const sliderImageTracker = slider.querySelector(".slider__image__tracker");

// элемент для отображения текущего номера слайда
const slideNumber = document.querySelector(".slideNumber");

// элемент для отображения имени персонажа
const characterName = document.querySelector(".characterName");


// Переменные состояния:
let counter = 0;

// Определяем ширину контейнера sliderImage
const width = sliderImage.offsetWidth;

// Массив объектов (можно задать произвольной длины)

const imageList = [{
    img: "https://sun9-39.userapi.com/c629201/v629201360/252db/PT_azsaTc0c.jpg",
    name: "Магистр Йодо"
    },
    {
        img: "https://fastory.ru/uploads/posts/2014-12/1419192585_super_hero_04.jpg",
        name: "Трипио"
    },
    {
        img: "https://sun9-29.userapi.com/impf/c850428/v850428321/3e6f2/YaDui1cVhUY.jpg?size=604x485&quality=96&sign=7ef84146066d544324ab01a4f783d6eb&type=album",
        name: "Дарт Вейдер"
    },
    {
        img: "https://vignette.wikia.nocookie.net/thestarwarscanon/images/b/b6/Darth_Maul_PROMO_001.jpg/revision/latest?cb=20191010072347",
        name: "Дарт Мол"
    },
    {
        img: "https://forexdengi.com/filedata/fetch?id=27909756",
        name: "Месть ситхов (2003)"
    },
    {
        img: "https://i.pinimg.com/originals/27/c2/cb/27c2cbb023c650873bf972957c08dd8c.jpg",
        name: "Оби Ван"
    },
];



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


