(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta salvado';

    let myFunction: Function;
    let myFunction2: (numero1: number, numero2: number) => number;

    myFunction2 = addNumbers;
    console.log(myFunction2(1, 2));

    myFunction = greet;
    console.log(myFunction('Emilio'));

    myFunction = saveTheWorld;
    console.log(myFunction);
})();