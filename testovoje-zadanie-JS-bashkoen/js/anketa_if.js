var surename = prompt("Ваша фамилия");
var name = prompt("Ваше имя");
var namefather = prompt("Ваше отчество");
var age = prompt("Ваш возраст");

var sex;
if (sex = confirm("Ваш пол мужской?")) {
  i = "мужской"
}
else {
  i = "женский"
};

var oldman;
if (sex = "мужской" && age < 61) {
  oldman = "нет"
}
if (sex = "женский" && age < 56) {
  oldman = "нет"
}
else {oldman = "да"};

alert("ФИО: " + surename + " " + name + " " + namefather +"\n" +
"возраст, лет: " + age + "\n" +
"возраст, дней: " + (age * 365) + "\n" +
"пол: " + i + "\n" +
"пенсионный возраст: " + oldman);
