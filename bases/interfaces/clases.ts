(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): void;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        constructor(public name: string, public realName : string, public age: number) {
            
        }
        mutantPower(power: number): string {
            return `Tiene un poder de: ${power}`;
        }

    }

    const wolverine = new Mutant('wolverine', 'Logan', 35);
    console.log(wolverine);
    console.log(wolverine.mutantPower(500))
})();