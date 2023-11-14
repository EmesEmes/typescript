(() => {
    class Avenger {
        private name: string;
        public team: string;
        public realName: string;
        static avgAge: number;

        constructor(name: string, team: string, realName: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }
    //Forma corta de definir una clase
    class Avenger2 {
        
        constructor(public nombre: string, public edad: number) {

        }
        bio() {
            return `Nombre: ${this.nombre} y edad: (${this.edad})`
        }
    }

    const antman: Avenger = new Avenger("Antman", "Capitan", "Scott");
    console.log(antman)

    const ironman: Avenger2 = new Avenger2('Tony Stark', 43);
    console.log(ironman.bio());
    console.log(ironman);
    
})();