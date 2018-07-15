'use strict';
//переписать с помощью forEach


function vowels() {
    var enterWord = prompt('Введите строку');
    var enterWordArr = enterWord.split('');
    var letter = "ёуеыаоэяию";
    var letterArr = letter.split('');
    var sum = 0;
    enterWordArr.forEach( function(elem) {
        letterArr.forEach(function(elem2) {
            if (elem == elem2) {
                sum = sum + 1;
            }
        });
    });
console.log(sum);
}
vowels();

