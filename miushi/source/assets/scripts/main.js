'use strict';

!(function () {
    /* Функция перемешивания массива по алгоритму Фишера-Йетса*/

    window.shuffle = function(arr) {
        var j, temp;
        for(var i = 0; i < arr.length; i++) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
})();

!(function () {
    // js-no-js
    var javaScript = document.querySelector('.html');
    javaScript.classList.add('js');
    javaScript.classList.remove('no-js');

    // navigation
    var navigation = document.querySelector('.navigation');
    var navigationToggle = document.querySelector('.navigation__toggle');

    navigation.classList.remove('navigation--opened');
    navigation.classList.add('navigation--closed');

    navigationToggle.addEventListener('click', function() {
        if (navigation.classList.contains('navigation--closed')) {
            navigation.classList.remove('navigation--closed');
            navigation.classList.add('navigation--opened');
        } else {
            navigation.classList.add('navigation--closed');
            navigation.classList.remove('navigation--opened')
        }
    });
})();

!(function () {
    var sliderProducts = document.querySelector('.slider__products');
    var sliderTemplate = document.querySelector('#slider__template').content.querySelector('.slider__item');

    var MAX_SLIDE = 3;
    Array.prototype.randomValue = function() {
        return this[Math.floor(Math.random() * this.length)];
    };

    /* Mock-объект слайдера */

    var sliderData = [
        {
            title: 'Счастливые часы',
            subtitle: 'с 11 до 16 в будние дни',
            discount: '15',
            image: 'images/slider/slider-image-sushi.png',
            imageTablet: 'images/slider/slider-image-sushi-tablet.png',
            imageDesktop: 'images/slider/slider-image-sushi-desktop.png'
        },
        {
            title: 'Счастливые часы',
            subtitle: 'с 11 до 16 в будние дни',
            discount: '15',
            image: 'images/slider/2slider-image-sushi.png',
            imageTablet: 'images/slider/2slider-image-sushi-tablet.png',
            imageDesktop: 'images/slider/2slider-image-sushi-desktop.png'
        },
        {
            title: 'Счастливые часы',
            subtitle: 'с 11 до 16 в будние дни',
            discount: '15',
            image: 'images/slider/3slider-image-sushi.png',
            imageTablet: 'images/slider/3slider-image-sushi-tablet.png',
            imageDesktop: 'images/slider/3slider-image-sushi-desktop.png'
        },
        {
            title: 'Счастливые часы',
            subtitle: 'с 11 до 16 в будние дни',
            discount: '15',
            image: 'images/slider/4slider-image-sushi.png',
            imageTablet: 'images/slider/4slider-image-sushi-tablet.png',
            imageDesktop: 'images/slider/4slider-image-sushi-desktop.png'
        },
        {
            title: 'Счастливые часы',
            subtitle: 'с 11 до 16 в будние дни',
            discount: '15',
            image: 'images/slider/5slider-image-sushi.png',
            imageTablet: 'images/slider/5slider-image-sushi-tablet.png',
            imageDesktop: 'images/slider/5slider-image-sushi-desktop.png'
        },
        {
            title: 'Счастливые часы',
            subtitle: 'с 11 до 16 в будние дни',
            discount: '15',
            image: 'images/slider/6slider-image-sushi.png',
            imageTablet: 'images/slider/6slider-image-sushi-tablet.png',
            imageDesktop: 'images/slider/6slider-image-sushi-desktop.png'
        }
    ];

    /* Прототип слайдера */

    class Slider {
        constructor(data) {
            this.documentObject = this.render(data);
        }
        render(data) {
            var sliderItem = sliderTemplate.cloneNode(true);
            sliderItem.querySelector('.slider__title').textContent = data.title;
            sliderItem.querySelector('.slider__subtitle').textContent = data.subtitle;
            sliderItem.querySelector('.slider__discount').textContent = data.discount;
            sliderItem.querySelector('.slider__image').src = data.image;
            sliderItem.querySelector('.slider__image--tablet').srcset = data.imageTablet;
            sliderItem.querySelector('.slider__image--desktop').srcset = data.imageDesktop;
            return sliderItem;
        }
    }

    var generation = function(amount) {
        var fragment = document.createDocumentFragment();
        var shuffleData = shuffle(sliderData);
        for (var i = 0; i < amount; i++) {
            fragment.appendChild(new Slider(shuffleData[i]).documentObject);
        }

        sliderProducts.appendChild(fragment);
    }

    generation(MAX_SLIDE);

    // window.backend.load(URL, function (data) {
    //     sliderData = data; // Тест без var
    //     generation(MAX_SLIDE);
    // });

})();