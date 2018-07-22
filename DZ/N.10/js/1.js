"use strict";

    function randomDiap(n,m) {
            return Math.floor(Math.random()*(m-n+1))+n;
    }
    
    function mood(colorsCount) {
        var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
        var colorsIn = {};
        console.log( 'цветов: ' + colorsCount );
        for ( var i=1; i<=colorsCount; i++ ) {
            var n=randomDiap(1,7 - i);
            var colorName=colors[n];
            console.log( colorName );
            colorsIn[i] = colors[n];
            colors.splice(n,1);
            //console.log(colors);
            
        }
        //console.log(colorsIn);
    }
    mood(3);
    