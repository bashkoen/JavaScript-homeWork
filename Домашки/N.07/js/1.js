'use strict';
var words = prompt("Введите слово");
function wordVerification() {
    var enterWords = words.match(/[ёуеыаоэяию]/igm).length;
    return enterWords;
}

console.log(wordVerification());
