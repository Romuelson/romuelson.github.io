'use strict';

(function () {
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

(function () {
    var MAX_SLIDER_ITEM = 3;
    
    Array.prototype.getRandomValue = function() {
        return this[Math.floor(Math.random() * this.length)];
    };

    /* Mock-объект слайдера */
    var sliderData = [
        {
            title: 'Счастливые часы',
            subtitle: 'с 11 до 16 в будние дни',
            discount: '15',
            image: 'images/image.png',
            imageTablet: 'images/image-tablet.png',
            imageDesktop: 'images/image-desktop.png'
        },
        {
            title: 'Аксиома силлог',
            subtitle: 'согласно мнению известных философов',
            discount: '20',
            image: 'images/image.png',
            imageTablet: 'images/image-tablet.png',
            imageDesktop: 'images/image-desktop.png'
        },
        {
            title: 'Структурализм абстрактен',
            subtitle: 'осмысляет дедуктивный метод',
            discount: '37',
            image: 'images/image.png',
            imageTablet: 'images/image-tablet.png',
            imageDesktop: 'images/image-desktop.png'
        },
        {
            title: 'Гедонизм осмысляет',
            subtitle: 'следовательно, творит данн',
            discount: '84',
            image: 'images/image.png',
            imageTablet: 'images/image-tablet.png',
            imageDesktop: 'images/image-desktop.png'
        },
        {
            title: 'Сомнение рефлектирует',
            subtitle: 'амбивалентно транспонирует',
            discount: '14',
            image: 'images/image.png',
            imageTablet: 'images/image-tablet.png',
            imageDesktop: 'images/image-desktop.png'
        },
        {
            title: 'Созерцание непредсказуемо',
            subtitle: 'решительно представляет',
            discount: '22',
            image: 'images/image.png',
            imageTablet: 'images/image-tablet.png',
            imageDesktop: 'images/image-desktop.png'
        }
    ];

    var sliderProductsList = document.querySelector('.slider__products');
    var sliderTemplateItem = document.querySelector('#slider__template').content.querySelector('.slider__item');

    var sliderRanderItem = function(sliderElement) {
        var sliderItem = sliderTemplateItem.cloneNode(true);

        sliderItem.querySelector('.slider__title').textContent = sliderElement.title;
        sliderItem.querySelector('.slider__subtitle').textContent = sliderElement.subtitle;
        sliderItem.querySelector('.slider__discount').textContent = sliderElement.discount;
        sliderItem.querySelector('.slider__image').src = sliderElement.image;
        sliderItem.querySelector('.slider__image--tablet').srcset = sliderElement.imageTablet;
        sliderItem.querySelector('.slider__image--desktop').srcset = sliderElement.imageDesktop;

        return sliderItem;
    };

    var sliderGenerateItem = function() {
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < MAX_SLIDER_ITEM; i++) {
            fragment.appendChild(sliderRanderItem(sliderData.getRandomValue()));
        }

        sliderProductsList.appendChild(fragment);
    };

    sliderGenerateItem();
})();