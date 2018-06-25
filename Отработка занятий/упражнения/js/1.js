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

*/
function ToyCar(carNum) {
    this.num=carNum;
    this.beep = function() {
        console.log('beeeep');
    }
}