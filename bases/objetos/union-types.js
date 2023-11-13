"use strict";
(() => {
    let myCustomVariable = "Emilio";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomVariable);
})();
