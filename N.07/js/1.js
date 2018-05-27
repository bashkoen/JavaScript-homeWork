var words = prompt("Введите слово");
function wordVerification(words) {
    var enterWords = words.match(/[ёуеыаоэяию]/igm).length;
    console.log("Количество букв в \"" + words + "\" " + enterWords);
}
wordVerification(words);