(() => {
    abstract class Mutante {
        constructor( public name: string, public realName: string) {

        }
    }

    class Xmen extends Mutante {}

    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine);
})();