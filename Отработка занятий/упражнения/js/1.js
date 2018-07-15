/* Напишите программу, которая выводит через console.log
все числа от 1 до 100, с двумя исключениями. Для чисел,
нацело делящихся на 3, она должна выводить ‘Fizz’, а
для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила
«FizzBuzz» для всех чисел, которые делятся и на 3, и на
5.

var num = 3;
var num2 = 5;
for (var i = 0; i <= 100; i++) 
    if (i % num == 0) {
        console.log( i + " Fizz")
    }
    else if (i % num2 == 0) {
        console.log(i + " Buzz")
    }
    else
    console.log(i);
   */

   /* треугольник из решеток

   var treu = "#";
   for (var i = 0; i < 7; i++) {
       console.log(treu);
       treu = treu + "#";
}
*/

/*Напишите программу, создающую строку, содержащую
решётку 8х8, в которой линии разделяются символами
новой строки. На каждой позиции либо пробел, либо #. В
результате должна получиться шахматная доска.
var a = "#";
var b = " ";
var doska = 8;
for (i = 0; i<=3; i++) {
    console.log(a + b + a + b + a + b + a +b +a +b +a +b +a +b +a +b);
    console.log(b + a + b + a + b + a +b +a +b +a +b +a +b +a +b +a);
}
*/
/* Напишите
функцию min, принимающую два аргумента, и
возвращающую минимальный из них.

function min(a, b) {
    if (a < b)
    console.log(a);
    else
    console.log(b);
}
min(10,5);
*/
/*
function User(name) { //создали конструктор
    this.sayHi = function() { //вложили ы него метод // ме
        alert("привет, я " + name);
    };

}
var vasya = new User("Вася"); //создали пользователя к конструктору
vasya.sayHi(); //пользователь умеет говорить - это метод класса User
*/

/*кролик*/
/*
function Rabbit(name) {
    var totalDist = 0;
    var timer;
    this.name = name;

    this.run = function() {
        timer = setInterval(function() { //установить запускает функцию через опред время
            console.log(totalDist ++);
        }, 1000); //одна секунда
    }
    this.stop = function() {
        clearTimeout(timer);
    }
}
*/
/*function getSumm(a, b) {
    return a + b;
}
var student = {
    name: 'Vasia',
    age: 25,
    address: {
        city: 'kiev',
        street: 'gfgfgfg'
    }
};
for (x in student) {
    console.log(x)
} //вывести, сколько свойств в объекте student
//где х - это любая переменная


var academy = {
    groups: [
        {
            number: 12,
            teacher: 'alex'
        },
        {
            number: 22,
            teacher: 'petia'
        }
    ],
    students: [
        {
            name: 'misha',
            email: 'sfgsdf@sfgsd.com',
            group:12
        }
    ],
    showGroup: function() {
        for (var i = 0; i<academy.groups.length; i++) {
            console.log('группа №: ' + academy.groups[1].number + 'препод ' + academy.groups[i].teacher);
        }
    }
}


function ToyCar(carNum) {
    this.num=carNum;
    this.beep = function() {
        console.log('beeeep');
    }
}

function getvalue(portfolio) {
    var total = 0.0;
    for(stock in portfolio) {
        var shares = portfolio[stock];
        var price = getquote(stock);
        total =+ shares * price;
    }
    return total;
}
Определите переменные str, num, flag и 
txt со значениями «Привет», 123, true, 
«true». При помощи оператора определения
 типа убедитесь, что переменных принадлежат
 типам: string, number, boolean.

var str = 'привет';
var num = 123;
var flag = true;
var txt = 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
*/
/*Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
5 + 3,
5 - 3,
5 * 3,
5 / 3,
поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

var a1 = 5+3;
var a2 = 5-3;
var a3 = 5*3;
var a4 = 5/3;
*/
/*var height = 23;
var width = 10;
var s = height * width;
console.log(s);
*/
/*
//Напиши скрипт, который находит объем 
//цилиндра высотой 10м (переменная heightC)
// и диаметром основания 4м (dC),
// результат поместите в переменную v.
var heightC = 10;
var dC = 4;
var v = 3.1415 * heightC * (dC*dC);
console.log(v);
*/
/*У прямоугольного треугольника две 
стороны n (со значением 3) и m 
(со значением 4). Найдите гипотенузу k 
по теореме Пифагора (нужно использовать 
    функцию Math.pow(число, степень) 
    или оператор возведения в степень ** ).
   
var n = 3;
var m = 4;
var k = Math.pow(n,m);
var b= n*n*n*n;
console.log(b);
console.log(k);
 */


/**) Найди двенадцатый элемент 
 * (let nFib = 12, el12;) 
 * последовательности Леонардо Пизанского
 *  (нужно использовать функцию 
 * Math.pow(число, степень)). 
 * Не забудьте округлить полученное 
 * число до целого — Math.round(число).

var nFib = 12;
var el12;
var n = 0;
for (var i = 0; i<=nFib; i++) {
    //console.log(i);
    var a = n+i;
    n = a + i;
    
    
}
console.log(a);
 */
//тоже самое, только рекурсией
/*
function fibonacci(n) {
    var num;
  
    if (n >= 2) {
      num = fibonacci(n - 1) + fibonacci(n - 2);
    } else {
      num = n
    }
  
    return num;
  }
  fibonacci(12);
*/
/*
Даны размер ипотечного кредита (S — 2 млн.руб), 
процентная ставка (p  — 10%), кол-во лет (years — 5).
 Найти переплату по кредиту, значение переплаты должно 
 содержаться в переменной perepl.
 
var s = 2000000;
var p = 0.1;
var year = 5;
var perep = s*p*year;
console.log(perep);
*/

/*
Создайте переменные m и n. В m поместите 
произвольное числовое значение. Напишите оператор 
ветвления if так, чтобы если m было больше 50, то 
в переменную n помещалось слово «большое», иначе — 
слово «маленькое».

var m = 51;
var n;
if (m > 50) {
    n = 'значение больше 50'
}
else n='аленько значение';
console.log(n);
*/

/*Напишите скрипт, 
который используя оператор while выведет 
все числа от 45 до 67.
 
var a = 45;
var b = 67;
while (a<b)
    console.log(a++);

    */

    /*Напишите скрипт, который используя 
    оператор while выведет все числа от 45 до 670,
     кратные 10
     
    var a = 45;
    var b = 670;
    var c=10;
    var d;
    
    while (a<b)
    document.write(a+'<br>');
    a = a + 10;
    a++;

var obj = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
};
var day = 3;
console.log(obj[day]);

var obj = {
    ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    en: ['md', 'th', 'fr', 'th', 'fr', 'sut', 'sn']
};
console.log(obj.ru[0] + obj.en[2]);
var lang = 'ru' && 'en';
var day = 2;
*/
