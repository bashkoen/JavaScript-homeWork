"use strict";

function randomDiap(n,m) {
        return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    console.log( 'цветов: ' + colorsCount );
    


    for ( var i=1; i<=colorsCount; i++ ) {
        var n=randomDiap(1,7);
        var colorName=colors[n];
        if (colors[n] in colorsName)
         colors = colors - [n];
        //colors[n] = true;
        //colors[n];

            //console.log('привет')
        
              //  console.log(colors);
                console.log( colorName );
        
    }
    //colors.splice([n],1);
}

mood(3);

/* var values=[55,77,55,66,77];
    var used={}; // ключ хэша - число, которое уже встречалось
    for ( var i=0; i<values.length; i++ ) {
        var value=values[i]; // очередное значение
        if ( value in used ) // встречалось ли оно?
            continue; // если да - всё, берём следующее
        used[value]=true; // если нет - запоминаем, что это значение уже встречалось
        console.log(value); // выводим его в консоль
    }*/