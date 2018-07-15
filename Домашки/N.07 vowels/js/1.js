'use strict';



function vowels() {
    var enterWord = prompt('Введите строку');
    var letter = "ёуеыаоэяию";
    var sum = 0;
for (var i = 0; i<enterWord.length; i++) {
    for (var j = 0; j<letter.length; j++) {
        if (enterWord[i] == letter[j]) {
            sum = sum + 1;
        }
    }
}
console.log(sum);
}

vowels();