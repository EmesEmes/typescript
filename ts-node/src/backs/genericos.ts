import { genericArrowFunction, genericFunction, printObject } from "../generics/generics";
import { Hero, Villain } from "../interfaces";



// printObject(123);
// printObject("Hello World");
// printObject({a:1, b:2, c:3});
// printObject( new Date() );

// console.log(genericFunction(3.1416123123).toFixed(2));
// console.log(genericFunction("hello world").toUpperCase());
// console.log(genericFunction(new Date()).getDay());

// console.log(genericArrowFunction(3.1416123123).toFixed(2));
// console.log(genericArrowFunction("hello world").toUpperCase());
// console.log(genericArrowFunction(new Date()).getDay());

const deadpool = {  
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 100
};

console.log(genericArrowFunction<Hero>(deadpool).realName);

