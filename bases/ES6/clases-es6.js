(() => {
    class Avenger {
        name;
        power;

        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor(name, power, flying = false) {
            super(name, power)
            this.flying = flying;
        }
    }

    const hulk = new Avenger("HULK", 3000);
    console.log(hulk.name);

    const halcon = new FlyingAvenger('Halcon', 1000,  true);
    console.log(halcon.flying);
})();