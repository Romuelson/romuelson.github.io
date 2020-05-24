'use strict';

;(function () {
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