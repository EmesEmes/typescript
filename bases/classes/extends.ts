(() => {
    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log("Constructor Avenger llamado");
        }
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName)
            console.log('Constructor Xmen llamado');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set FullName(name: string) {
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName())
        }
        
    }

    const wolverine = new Xmen('wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    wolverine.FullName = 'Emilio';
    console.log(wolverine.fullName);
})();