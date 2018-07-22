'use strict';
//переписать с помощью filter


function vowels() {
    var enterWord = prompt('Введите строку');
    var enterWordArr = enterWord.split('');
    var letter = "ёуеыаоэяию";
    var letterArr = letter.split('');
    var sum = 0;
    enterWordArr.filter(function(elem) {
       letterArr.filter(function(elem2) {
            if (elem == elem2) {
                sum += 1;
            }
        })
    });
console.log(sum);
}
vowels();

