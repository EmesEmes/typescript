"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta salvado';
    let myFunction;
    let myFunction2;
    myFunction2 = addNumbers;
    console.log(myFunction2(1, 2));
    myFunction = greet;
    console.log(myFunction('Emilio'));
    myFunction = saveTheWorld;
    console.log(myFunction);
})();
