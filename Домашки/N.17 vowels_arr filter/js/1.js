'use strict';
//переписать с помощью reduce


function vowels() {
    var enterWord = prompt('Введите строку');
    var enterWordArr = enterWord.split('');
    var letter = "ёуеыаоэяию";
    var letterArr = letter.split('');
    var sum3 = 0;
    
    enterWordArr.reduce(function(sum) {
        letterArr.reduce(function(sum2) {
           if (sum == sum2) {
               sum3 = sum3 + 1;
           }
        });
    });
console.log(sum3);
}
vowels();

