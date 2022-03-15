// Получение DOM - элементов

// Главный контейнер страницы
const main = document.body.querySelector("main");

// контейнер всех элементов слайдера
const slider = document.querySelector(".slider");

// контейнер для изображений слайдера
const sliderImage = slider.querySelector(".slider__image");

// "Дорожка" с изображениями (должна иметь свойство "display: flex")
const sliderImageTracker = slider.querySelector(".slider__image__tracker");

// элемент для отображения текущего номера слайда
const slideNumber = main.querySelector(".slideNumber");

// элемент для отображения имени персонажа
const characterName = main.querySelector(".characterName");

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

// Определяем ширину контейнера sliderImage
const width = sliderImage.offsetWidth;

// Экспорт констант в script.js

export {main, slideNumber, sliderImageTracker, width, imageList, characterName};