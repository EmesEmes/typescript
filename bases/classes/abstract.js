"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine);
})();
