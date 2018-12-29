var surename = prompt("Ваша фамилия");
var name = prompt("Ваше имя");
var namefather = prompt("Ваше отчество");
var age = prompt("Ваш возвраст");

var sex;
sex = confirm("Ваш пол мужской?")? i = "мужской": i = "женский";

var oldman;
sex = "мужской" && age < 61? oldman = "нет": oldman = "да";
sex = "женский" && age < 56? oldman = "нет": oldman = "да";

alert("ФИО: " + surename + " " + name + " " + namefather +"\n" +
"возраст, лет: " + age + "\n" +
"возраст, дней: " + (age * 365) + "\n" +
"пол: " + i + "\n" +
"пенсионный возраст: " + oldman);
