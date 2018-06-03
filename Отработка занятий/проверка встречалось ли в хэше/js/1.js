"use strict";

var values=[55, 77, 55, 66, 77];
var used={}; //ключ хэша - число, которое уже встречалось
for (var i=0; i<values.length; i++) {
    var value=values[i]; //очередное значение
    if (value in used) //встречалось ли оно?
    continue; //если да - идем к следующему
    used[value]=true; //если нет - запоминаем, что это значение встречалось
    console.log(value);
}