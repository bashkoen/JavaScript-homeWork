'use strict';
function fact1(n) {
    if (n<=1) //условие остановки рекурсии
    return 1;
    return n*fact1(n-1); //рекурсия
}
console.log(fact1(5));

//тоже самое, но без рекурсии
function fact2(n) {
    var f=1;
    for (var i = 2; i<=n; i++)
    f*=i;
    return f;
}
console.log(fact2(5));