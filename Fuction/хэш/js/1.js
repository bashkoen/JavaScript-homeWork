"use strict";
var beatles = {
    name: 'Beatles',
    members: ['McCartney', 'Lennon', 'Harrison', 'Starr'],
    albums: [
        {name:'Please Please Me', year: 1963},
        {name: 'With The Beatles', year: 1963},
        {name: "A Hard Day's Night", year: 1964}
    ]
};
console.log(beatles.albums);

//проверить, есть ли 'name' в хэше
console.log('age' in beatles);

//удалить элемент из хэша
delete beatles.albums[2];
console.log(beatles.albums);

//перебор элементов хэша
//for (name in beatles)
