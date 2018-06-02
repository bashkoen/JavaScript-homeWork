function wordVerification() {
    var words = prompt("Введите слово");
    var enterWords = words.match(/[ёуеыаоэяию]/igm).length;
    return enterWords;
}

console.log(wordVerification());
