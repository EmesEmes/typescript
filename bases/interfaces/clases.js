"use strict";
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(power) {
            return `Tiene un poder de: ${power}`;
        }
    }
    const wolverine = new Mutant('wolverine', 'Logan', 35);
    console.log(wolverine);
    console.log(wolverine.mutantPower(500));
})();
