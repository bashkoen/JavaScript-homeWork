var enter = document.getElementById('enter');
var search = document.getElementById('search');
var show = document.getElementById('show');

enter.addEventListener('click', textList);
function textList() {
  var list = prompt("введите текст произвольной длины, не менее 4-х слов");
  var words = list.split(' ');
  for (i = 0; i < list.length; i++) {
    list[i] = list[i].replace(',');
  }

  search.addEventListener('click', searchWords);
  function searchWords() {
    var newWords = words.sort(wordsList);
    function wordsList(a, b) {
      if (a.length > b.length) {
        return -1;
      }
      if (a.length < b.length) {
        return 1;
      }
      return 0;
    }
    console.log(words[0] + " " + words[1] + " " + words[2]);
  }
  show.addEventListener('click', showMessage);
  function showMessage() {
    alert(words[0] + " \n" + words[1] + " \n" + words[2]);
  }
}
