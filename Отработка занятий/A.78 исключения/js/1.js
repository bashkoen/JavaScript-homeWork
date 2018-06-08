try {
    console.log('до ошибки');
    var a=bbbbbb;
    console.log('после ошибки');
}
catch (ex) {
    console.error('возникло исключение!');
    console.error('типы исключения: '+ex.name);
    console.error('текст исключения: '+ex.message);
}

//пример исключения, если нет данных по исключению
try {
    console.log('до входа в блок');
    try {
        console.log('до ошибки');
        var a=bbbbb; //обращаемся к несуществующей переменной bbbbb
        console.log('после ошибки');
}
catch (ex) {
    if (ex.name == 'ReferenceError') { //мое исключение?
    console.error('обращение к несуществующей переменной!');
    console.error('текст исключения: '+ex.message);
    }
    else
    throw ex; //не мое исключение - пусть кто-то другой обработает
}
console.log('после входа в блок');
}
catch (ex) {
    console.error('возникло исключение!');
    console.error('тип исключения: '+ex.name);
    console.error('текст исключения: '+ex.message);
}