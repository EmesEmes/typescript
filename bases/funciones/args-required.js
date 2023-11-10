"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const nombre = fullName('Emilio', 'del Hierro');
    console.log({ nombre });
})();
