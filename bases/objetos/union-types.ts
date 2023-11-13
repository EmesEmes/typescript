(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = "Emilio";
    console.log(typeof myCustomVariable)

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: ['Ninguno']
    }
    console.log(typeof myCustomVariable);
})();