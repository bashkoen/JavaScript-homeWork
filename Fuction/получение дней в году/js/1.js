//получение дней в году
function getYearDays(year) {
    if (year%4==0)
    return 366;
    else
    return 365;
}

//получуние дней в году стрелочной функцией
var getYearDays2 = (year) => {
    if (year%4==0)
    return 366;
    else
    return 365;
}