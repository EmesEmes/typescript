"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    //Forma corta de definir una clase
    class Avenger2 {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        bio() {
            return `Nombre: ${this.nombre} y edad: (${this.edad})`;
        }
    }
    const antman = new Avenger("Antman", "Capitan", "Scott");
    console.log(antman);
    const ironman = new Avenger2('Tony Stark', 43);
    console.log(ironman.bio());
    console.log(ironman);
})();
