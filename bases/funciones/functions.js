"use strict";
(() => {
    const hero = 'Flash';
    function returnName(hero) {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName('Emilio');
    console.log(heroName);
})();
